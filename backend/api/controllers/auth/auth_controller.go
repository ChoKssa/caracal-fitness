package auth

import (
	"net/http"
	"time"

	"github.com/caracal/database"
	"github.com/caracal/database/models"
	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

type AuthController struct {
	db *database.Repository
}

func NewAuthController(db *database.Repository) *AuthController {
	return &AuthController{db: db}
}

// JWT Secret key
var jwtKey = []byte("your_secret_key")

type Credentials struct {
	Password string `json:"password"`
	Email    string `json:"email"`
}

type Claims struct {
	Email string `json:"email"`
	jwt.StandardClaims
}

// HashPassword hashes user's password using bcrypt
func HashPassword(password string) (string, error) {
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return "", err
	}
	return string(hashedPassword), nil
}

// Register user function
func (a *AuthController) Register(c *gin.Context) {
	var user models.User
	if err := c.ShouldBindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	hashedPassword, err := HashPassword(user.Password)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error while hashing password"})
		return
	}
	user.Password = hashedPassword

	if err := a.db.DB.Create(&user).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error while creating user"})
		return
	}

	c.JSON(http.StatusCreated, user)
}

// Login user function
func (a *AuthController) Login(c *gin.Context) {
	var creds Credentials
	if err := c.ShouldBindJSON(&creds); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var user models.User
	if err := a.db.DB.Where("email = ?", creds.Email).First(&user).Error; err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid credentials"})
		return
	}

	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(creds.Password)); err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid credentials"})
		return
	}

	expirationTime := time.Now().Add(24 * time.Hour)
	claims := &Claims{
		Email: user.Email,
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: expirationTime.Unix(),
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenString, err := token.SignedString(jwtKey)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error while generating token"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"token": tokenString})
}

// GetUserByID function
func (a *AuthController) GetUserByID(c *gin.Context) {
	id := c.Param("id")
	var user models.User
	if err := a.db.DB.First(&user, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
		return
	}
	c.JSON(http.StatusOK, user)
}
