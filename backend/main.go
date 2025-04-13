package main

import (
	"backend/database"
	"backend/models"
	"backend/routes"
	"fmt"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main(){
	e := echo.New()
	database.InitDB()
	if err:=database.Db.AutoMigrate(&models.User{},&models.Category{});err!=nil{
		fmt.Println("Ошибка")
	}
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"http://localhost:3000"},
		AllowMethods: []string{"GET","POST","PUT","PATCH","DELETE"},
		AllowCredentials: true,
	}))
	routes.UserRoutes(e)
	routes.CategoryRoutes(e)

	e.Start(":8000")
}