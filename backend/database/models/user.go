package models

import (
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	UUID      string `json:"uuid" gorm:"primaryKey"`
	FirstName string `json:"first_name"`
	LastName  string `json:"last_name"`
	Email     string `json:"email" gorm:"unique"`
	Phone     string `json:"phone"`
	Password  string `json:"password"`
	Coach     bool   `json:"coach"`
}
