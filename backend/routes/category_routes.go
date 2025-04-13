package routes

import (
	"backend/controllers"

	"github.com/labstack/echo/v4"
)

func CategoryRoutes(e *echo.Echo)  {
	categpryRoutes := e.Group("/category")

	categpryRoutes.POST("/create",controllers.CreateCategory)
	categpryRoutes.GET("/all",controllers.GetCategories)
}