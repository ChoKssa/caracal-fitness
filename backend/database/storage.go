package database

import (
	"fmt"
	"sync"

	"github.com/caracal/database/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

type Repository struct {
	DB    *gorm.DB
	Mutex sync.Mutex
}

type DBConfig struct {
	Host     string
	User     string
	Password string
	Dbname   string
	Port     string
	Sslmode  string
}

func NewConnection(config *DBConfig) (Repository, error) {
	dbFile := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=%s",
		config.Host,
		config.User,
		config.Password,
		config.Dbname,
		config.Port,
		config.Sslmode)
	db, err := gorm.Open(postgres.Open(dbFile), &gorm.Config{})

	if err != nil {
		return Repository{}, err
	}
	err = db.AutoMigrate(&models.Food{}, &models.User{})
	if err != nil {
		return Repository{}, fmt.Errorf("failed to migrate database: %w", err)
	}
	return Repository{
		DB: db,
	}, nil
}
