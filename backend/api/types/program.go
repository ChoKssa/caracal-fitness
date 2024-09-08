package types

type NewProgram struct {
	CoachID     uint   `json:"coach_id" binding:"required"`
	ClientID    uint   `json:"client_id" binding:"required"`
	Exercises   string `json:"exercises" binding:"required"`
	Description string `json:"description" binding:"required"`
}

type Program struct {
	ID          uint   `json:"id"`
	CoachID     uint   `json:"coach_id"`
	ClientID    uint   `json:"client_id"`
	Exercises   string `json:"exercises"`
	Description string `json:"description"`
}
