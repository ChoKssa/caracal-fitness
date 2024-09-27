package models

import (
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	Name                string `json:"name" gorm:"not null"`
	Email               string `json:"email" gorm:"unique;not null"`
	Password            string `json:"password" gorm:"not null"`
	IsVerified          bool   `json:"is_verified" gorm:"default:false"`
	VerificationToken   string `json:"verification_token"`
	PhoneNumber         string `json:"phone_number" gorm:"unique"`
	PhoneNumberVerified bool   `json:"phone_number_verified" gorm:"default:false"`
}
