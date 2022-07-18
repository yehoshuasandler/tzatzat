package ipc

import (
	app "tzat/core/App"
	chat "tzat/core/Chat"

	"github.com/wailsapp/wails/v2/pkg/runtime"
)

func (c *Channel) AddNewChat(users []User) {
	var usersOfChat []chat.User
	for _, u := range users {
		usersOfChat = append(usersOfChat, chat.User{
			Id:                   u.Id,
			DisplayName:          u.DisplayName,
			ProfilePictureSource: u.ProfilePictureSource,
		})
	}

	newChat := chat.Chat{
		Id:    "TODO: Make unique chat ids",
		Users: usersOfChat,
	}

	chat.GetCollection().AddChat(newChat)

	newChatResponse := Chat{
		Id:          newChat.Id,
		SenderUsers: users,
	}

	runtime.EventsEmit(app.GetInstance().Ctx, "newChatAdded", newChatResponse)
}