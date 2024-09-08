package models

import (
	"gorm.io/gorm"
)

type Food struct {
	gorm.Model
	Name        string `json:"name" gorm:"unique"`
	Weight		float64 `json:"weight"`
}
