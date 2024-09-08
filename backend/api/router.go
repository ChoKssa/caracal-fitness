package api

import (
	"fmt"
	"net/http"
	"os"

	"github.com/caracal/api/controllers/food"
	"github.com/caracal/api/controllers/message"
	"github.com/caracal/api/controllers/program"
	"github.com/caracal/api/controllers/user"
	"github.com/caracal/database"
	"github.com/gin-gonic/gin"
	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
)

func corsMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Origin, Content-Type, Authorization")
		c.Writer.Header().Set("Access-Control-Max-Age", "86400")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")

		if c.Request.Method == "OPTIONS" {
			c.Writer.WriteHeader(http.StatusOK)
		}
		c.Next()
	}
}

// @title	Area API
// @version 1.0
// @description This is the Area API server.

// @host 	localhost:8080
// @BasePath /api
func StartRouter(db *database.Repository) {
	router := gin.Default()
	host := os.Getenv("API_HOST")
	port := os.Getenv("API_PORT")

	if os.Getenv("ENV") == "PRODUCTION" {
		gin.SetMode(gin.ReleaseMode)
	}

	/*** CORS ***/
	router.Use(corsMiddleware())

	/*** API ROUTES ***/
	APIRouter := router.Group("/api")
	{
		/*** SWAGGER ROUTES ***/
		APIRouter.GET("/docs/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))

		/*** FOOD ROUTES ***/
		foodCtrl := food.NewController(db)
		APIRouter.GET("/foods/", foodCtrl.GetFoods)
		APIRouter.POST("/foods/", foodCtrl.AddFood)
		APIRouter.DELETE("/foods/:id", foodCtrl.DeleteFood)
		/*** PROGRAM ROUTES ***/
		programCtrl := program.NewProgramController(db)
		APIRouter.POST("/programs", programCtrl.CreateProgram)
		APIRouter.GET("/clients/:client_id/programs", programCtrl.GetProgramsByClient)

		/*** USER ROUTES ***/
		userCtrl := user.NewUserController(db)
		APIRouter.POST("/register", userCtrl.Register)
		APIRouter.POST("/login", userCtrl.Login)
		APIRouter.GET("/users/:id", userCtrl.GetUserByID)
		APIRouter.GET("/users/email/:email", userCtrl.GetUserByEmail)

		/*** MESSAGE ROUTES ***/
		chatCtrl := message.NewChatController(db)
		APIRouter.GET("/ws", chatCtrl.ServeWs)

	}

	router.Run(fmt.Sprintf("%s:%s", host, port))
}
