package models

import (
	"gorm.io/gorm"
)

type Program struct {
	gorm.Model
	CoachID     uint   `json:"coach_id"`
	ClientID    uint   `json:"client_id"`
	Exercises   string `json:"exercises"`
	Description string `json:"description"`
}
