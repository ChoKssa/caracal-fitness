package food

import (
	"net/http"
	"strconv"

	"github.com/caracal/api/types"
	"github.com/caracal/database"
	"github.com/gin-gonic/gin"
)

type Controller struct {
	DB *database.Repository
}

func NewController(db *database.Repository) *Controller {
	return &Controller{
		DB: db,
	}
}

func (c *Controller) GetFoods(ctx *gin.Context) {
	foodsDB, err := c.DB.GetFoods()

	if err != nil {
		ctx.JSON(http.StatusInternalServerError, "Internal server error")
		return
	}
	foods := make([]types.Food, len(foodsDB))

	for i, foodDB := range foodsDB {
		foods[i] = types.Food{
			ID:          foodDB.ID,
			Name:        foodDB.Name,
			Weight: foodDB.Weight,
		}
	}
	ctx.JSON(http.StatusOK, foods)
}

func (c *Controller) AddFood(ctx *gin.Context) {
	newFood := &types.NewFood{}

	if err := ctx.ShouldBindJSON(newFood); err != nil {
		ctx.JSON(http.StatusBadRequest, "Invalid request")
		return
	}
	if err := c.DB.AddFood(newFood); err != nil {
		ctx.JSON(http.StatusInternalServerError, "Internal server error")
		return
	}
	ctx.JSON(http.StatusCreated, nil)
}

func (c *Controller) DeleteFood(ctx *gin.Context) {
	foodID, err := strconv.ParseUint(ctx.Param("id"), 10, 64)

	if err != nil {
		ctx.JSON(http.StatusBadRequest, "Invalid request")
		return
	}
	if err := c.DB.RemoveFood(uint(foodID)); err != nil {
		ctx.JSON(http.StatusInternalServerError, "Internal server error")
		return
	}
	ctx.JSON(http.StatusOK, "Food deleted")
}
