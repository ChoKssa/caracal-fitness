package program

import (
	"net/http"
	"strconv"

	"github.com/caracal/database"
	"github.com/caracal/database/models"
	"github.com/gin-gonic/gin"
)

type ProgramController struct {
	db *database.Repository
}

func NewProgramController(db *database.Repository) *ProgramController {
	return &ProgramController{db: db}
}

func (ctrl *ProgramController) CreateProgram(c *gin.Context) {
	var input struct {
		CoachID     uint   `json:"coach_id" binding:"required"`
		ClientID    uint   `json:"client_id" binding:"required"`
		Exercises   string `json:"exercises" binding:"required"` // JSON string of exercises
		Description string `json:"description" binding:"required"`
	}

	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	program := models.Program{
		CoachID:     input.CoachID,
		ClientID:    input.ClientID,
		Exercises:   input.Exercises,
		Description: input.Description,
	}

	if err := ctrl.db.CreateProgram(&program); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusCreated, program)
}

func (ctrl *ProgramController) GetProgramsByClient(c *gin.Context) {
	clientIDStr := c.Param("client_id")
	clientID, err := strconv.ParseUint(clientIDStr, 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid client ID"})
		return
	}

	programs, err := ctrl.db.GetProgramsByClient(uint(clientID))
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, programs)
}
