package main

import (
	"log"
	"os"

	"github.com/caracal/api"
	"github.com/caracal/database"
	"github.com/joho/godotenv"
)

// @title	Area API
// @version 1.0
// @description This is the Area API server.

// @host 	http://localhost:8080
// @BasePath /api
func main() {
	err := godotenv.Load(".env")

	if err != nil {
		log.Fatal(err)
		return
	}
	config := database.DBConfig{
		Host:     os.Getenv("POSTGRES_HOST"),
		User:     os.Getenv("POSTGRES_USER"),
		Password: os.Getenv("POSTGRES_PASSWORD"),
		Dbname:   os.Getenv("POSTGRES_DB"),
		Port:     os.Getenv("POSTGRES_PORT"),
		Sslmode:  os.Getenv("POSTGRES_SSL_MODE"),
	}
	db, err := database.NewConnection(&config)

	if err != nil && db.DB == nil {
		log.Fatal(err)
		return
	}
	api.StartRouter(&db)
}
