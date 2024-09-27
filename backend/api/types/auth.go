package types

import "github.com/golang-jwt/jwt"

// Credentials represents the structure for user login
type Credentials struct {
	Password string `json:"password" binding:"required"`
	Email    string `json:"email" binding:"required,email"`
}

// Claims represents the structure for JWT claims
type Claims struct {
	Email string `json:"email"`
	jwt.StandardClaims
}
