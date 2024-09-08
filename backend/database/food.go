package database

import (
	"github.com/caracal/api/types"
	"github.com/caracal/database/models"
)

func (r *Repository) GetFoods() ([]models.Food, error) {
	var foods []models.Food

	r.Mutex.Lock()
	defer r.Mutex.Unlock()
	if err := r.DB.Find(&foods).Error; err != nil {
		return nil, err
	}
	return foods, nil
}

func (r *Repository) AddFood(food *types.NewFood) error {
	newFood := &models.Food{
		Name: food.Name,
		Weight: food.Weight,
	}
	r.Mutex.Lock()
	defer r.Mutex.Unlock()
	result := r.DB.Create(newFood)

	if result.Error != nil {
		return result.Error
	}
	if err := result.First(newFood).Error; err != nil {
		return err
	}
	return nil
}

func (r *Repository) RemoveFood(id uint) error {
	r.Mutex.Lock()
	defer r.Mutex.Unlock()

	if err := r.DB.Delete(&models.Food{}, id).Error; err != nil {
        return err
    }

	return nil
}
