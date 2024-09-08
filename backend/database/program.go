package database

import (
	"github.com/caracal/database/models"
)

func (r *Repository) CreateProgram(program *models.Program) error {
	r.Mutex.Lock()
	defer r.Mutex.Unlock()
	return r.DB.Create(program).Error
}

func (r *Repository) GetProgramsByClient(clientID uint) ([]models.Program, error) {
	var programs []models.Program
	r.Mutex.Lock()
	defer r.Mutex.Unlock()
	err := r.DB.Where("client_id = ?", clientID).Find(&programs).Error
	return programs, err
}
