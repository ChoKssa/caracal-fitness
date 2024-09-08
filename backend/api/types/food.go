package types

type NewFood struct {
	Name    string `json:"name" binding:"required"`
	Weight float64 `json:"weight" binding:"required"`
}

type Food struct {
	ID 		uint `json:"id" binding:"required"`
	Name    string `json:"name" binding:"required"`
	Weight float64 `json:"weight" binding:"required"`
}
