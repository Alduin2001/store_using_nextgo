package routes

import (
	"backend/controllers"

	"github.com/labstack/echo/v4"
)


func UserRoutes(e *echo.Echo){

	userRoutes:=e.Group("/user")
	userRoutes.POST("/create",controllers.CreateUser)
}