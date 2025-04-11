package controllers

import (
	"backend/database"
	"backend/models"
	"net/http"

	"github.com/labstack/echo/v4"
)


func CreateCategory(c echo.Context)  error{
	var category models.Category

	if err:=c.Bind(&category);err!=nil{
		return c.JSON(http.StatusBadRequest,map[string]string{
			"message":"Не удалось парсить",
		})
	}
	result:=database.Db.Create(&category)

	if result.Error!=nil{
		return c.JSON(http.StatusBadRequest,map[string]string{
			"message":"Не удалось добавить категорию",
		})
	}
	return c.JSON(http.StatusCreated,map[string]string{
		"message":"Категория добавлена",
	})
}