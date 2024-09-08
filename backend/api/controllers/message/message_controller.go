package message

import (
	"net/http"

	"github.com/caracal/database"
	"github.com/caracal/database/models"

	"github.com/gin-gonic/gin"
	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

type ChatController struct {
	db *database.Repository
}

func NewChatController(db *database.Repository) *ChatController {
	return &ChatController{db: db}
}

func (ctrl *ChatController) ServeWs(c *gin.Context) {
	conn, err := upgrader.Upgrade(c.Writer, c.Request, nil)
	if err != nil {
		http.NotFound(c.Writer, c.Request)
		return
	}
	go ctrl.handleConnections(conn)
}

func (ctrl *ChatController) handleConnections(conn *websocket.Conn) {
	defer conn.Close()

	for {
		var msg models.Message
		err := conn.ReadJSON(&msg)
		if err != nil {
			break
		}
		ctrl.db.DB.Create(&msg)
		// Broadcast to other users (this is simplified for demonstration purposes)
		conn.WriteJSON(msg)
	}
}
