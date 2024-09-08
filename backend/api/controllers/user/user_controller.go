package user

import (
	"net/http"

	"github.com/caracal/database"
	"github.com/caracal/database/models"
	"gorm.io/gorm"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"golang.org/x/crypto/bcrypt"
)

// UserController gère les opérations liées aux utilisateurs
type UserController struct {
	db *database.Repository
}

// NewUserController crée un nouveau contrôleur d'utilisateur
func NewUserController(db *database.Repository) *UserController {
	return &UserController{db: db}
}

// Register enregistre un nouvel utilisateur
func (ctrl *UserController) Register(c *gin.Context) {
	var input struct {
		FirstName string `json:"first_name"`
		LastName  string `json:"last_name"`
		Email     string `json:"email"`
		Phone     string `json:"phone"`
		Password  string `json:"password"`
		Coach     bool   `json:"coach"`
	}
	// Vérifie si les données JSON sont valides
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Hache le mot de passe
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(input.Password), bcrypt.DefaultCost)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to hash password"})
		return
	}

	// Crée un nouvel utilisateur avec les informations fournies et un ID unique
	user := models.User{
		FirstName: input.FirstName,
		LastName:  input.LastName,
		Email:     input.Email,
		Phone:     input.Phone,
		Password:  string(hashedPassword),
		UUID:      uuid.New().String(), // Assigne un ID unique
		Coach:     input.Coach,
	}

	// Enregistre l'utilisateur dans la base de données
	if err := ctrl.db.DB.Create(&user).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	// Répond avec un message de succès
	c.JSON(http.StatusOK, gin.H{"message": "Registration successful"})
}

// Login connecte un utilisateur
func (ctrl *UserController) Login(c *gin.Context) {
	var input struct {
		Email    string `json:"email"`    // Identifiant par email
		Password string `json:"password"` // Mot de passe
	}

	// Vérifie si les données JSON sont valides
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var user models.User
	// Cherche l'utilisateur par email
	if err := ctrl.db.DB.Where("email = ?", input.Email).First(&user).Error; err != nil {
		if err == gorm.ErrRecordNotFound {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid email or password"})
			return
		}
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	// Compare les mots de passe hachés
	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(input.Password)); err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid email or password"})
		return
	}

	// Répond avec les informations de l'utilisateur, y compris s'il est coach
	c.JSON(http.StatusOK, gin.H{
		"id":         user.ID,
		"first_name": user.FirstName,
		"last_name":  user.LastName,
		"email":      user.Email,
		"phone":      user.Phone,
		"coach":      user.Coach,
	})
}

// GetUserByID obtient les informations d'un utilisateur par son ID
func (ctrl *UserController) GetUserByID(c *gin.Context) {
	var user models.User
	id := c.Param("id")

	// Cherche l'utilisateur par ID
	if err := ctrl.db.DB.Where("id = ?", id).First(&user).Error; err != nil {
		if err == gorm.ErrRecordNotFound {
			c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
			return
		}
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	// Répond avec les informations de l'utilisateur
	c.JSON(http.StatusOK, user)
}

func (ctrl *UserController) GetUserByEmail(c *gin.Context) {
	var user models.User
	email := c.Param("email")

	// Cherche l'utilisateur par email
	if err := ctrl.db.DB.Where("email = ?", email).First(&user).Error; err != nil {
		if err == gorm.ErrRecordNotFound {
			c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
			return
		}
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	// Répond avec les informations de l'utilisateur
	c.JSON(http.StatusOK, user)
}
