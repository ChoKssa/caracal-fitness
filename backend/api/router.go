package api

import (
	"fmt"
	"net/http"
	"os"

	"github.com/caracal/api/controllers/auth"
	"github.com/caracal/database"
	"github.com/gin-gonic/gin"
	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
)

// Middleware for handling CORS
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

// Initialize and start the router
// @title   Area API
// @version 1.0
// @description This is the Area API server.
// @host     localhost:8080
// @BasePath /api
func StartRouter(db *database.Repository) {
	router := gin.Default()

	host := os.Getenv("API_HOST")
	port := os.Getenv("API_PORT")

	if os.Getenv("ENV") == "PRODUCTION" {
		gin.SetMode(gin.ReleaseMode)
	}

	// Apply CORS middleware
	router.Use(corsMiddleware())

	// Create group for API routes
	APIRouter := router.Group("/api")
	{
		// Swagger route
		APIRouter.GET("/docs/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))

		// Auth routes
		authCtrl := auth.NewAuthController(db)
		APIRouter.POST("/register", authCtrl.Register)
		APIRouter.POST("/login", authCtrl.Login)
		APIRouter.GET("/users/:id", authCtrl.GetUserByID)
	}

	// Start the router
	router.Run(fmt.Sprintf("%s:%s", host, port))
}
