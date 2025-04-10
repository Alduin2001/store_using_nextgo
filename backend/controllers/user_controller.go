package controllers

import (
	customstructs "backend/custom_structs"
	"backend/database"
	"backend/models"
	"backend/utils"
	"net/http"

	"github.com/labstack/echo/v4"
	"golang.org/x/crypto/bcrypt"
)



func CreateUser(c echo.Context) error{
	var user models.User

	if err:=c.Bind(&user);err!=nil{
		return c.JSON(http.StatusBadRequest,map[string]string{
			"message":"Ошибка парсинга",
		})
	}
	hashed,err:= bcrypt.GenerateFromPassword([]byte(user.Password),bcrypt.DefaultCost)
	if err!=nil{
		return c.JSON(http.StatusBadRequest,map[string]string{
			"message":"Не хэшится",
		})
	}
	user.Password = string(hashed)
	result:=database.Db.Create(&user)
	if result.Error!=nil{
		return c.JSON(http.StatusBadRequest,map[string]string{
			"message":"Не удалось добавить пользователя",
		})
	}

	return c.JSON(http.StatusCreated,map[string]string{
		"message":"Пользователь создан",
	})
}

func LoginUser(c echo.Context) error{
	var user models.User
	var foundUser models.User
	var payload customstructs.Payload
	if err:=c.Bind(&user);err!=nil{
		return c.JSON(http.StatusBadRequest,map[string]string{
			"message":"Не удалось парсить",
		})
	}
	result:=database.Db.Model(&models.User{}).Where("email = ?",user.Email).First(&foundUser)
	if result.Error!=nil{
		return c.JSON(http.StatusBadRequest,map[string]interface{}{
			"message":"Error",
		})
	}
	err:=bcrypt.CompareHashAndPassword([]byte(foundUser.Password),[]byte(user.Password))
	if err!=nil{
		return c.JSON(http.StatusOK,map[string]string{
			"message":"Проверку не прошёл",
		})
	}
	payload.Id = int(foundUser.ID)
	payload.Role = foundUser.Role

	jwt,err := utils.GenerateToken(&payload)
	if err!=nil{
		return c.JSON(http.StatusBadRequest,map[string]string{
			"message":"Не удалось сгенерировать токен",
		})
	}
	cookie := utils.SetJWTCookie(jwt)

	c.SetCookie(&cookie)
	return c.JSON(http.StatusOK,map[string]interface{}{
		"payload":jwt,
		"role":payload.Role,
	})
}

// func GetProfile(c echo.Context) error{
	
// }

func GetUsers(c echo.Context) error{
	var user_data []customstructs.UsersData
	var users []models.User

	if err:=database.Db.Omit("password").Find(&users);err!=nil{
		return c.JSON(http.StatusBadRequest,map[string]string{
			"message":"Пользователи не найдены",
		})
	}
	for _,user:=range users{
		user_data = append(user_data, customstructs.UsersData{
			Id: int(user.ID),
			Name: user.Name,
			Surname: user.Surname,
			Email: user.Email,
		})
	}
	return c.JSON(http.StatusOK,map[string]interface{}{
		"message":"Ok",
		"users":user_data,
	})
}

func GetUser(c echo.Context) error{
	id:=c.Param("id")
	var user_data customstructs.UsersData
	var user models.User
	
	if err:=database.Db.Omit("password").First(&user,id);err!=nil{
		return c.JSON(http.StatusBadRequest,map[string]string{
			"message":"Пользователь не найден",
		})
	}
	user_data.Id = int(user.ID)
	user_data.Name = user.Name
	user_data.Surname = user.Surname
	user_data.Email = user.Email
	return c.JSON(http.StatusOK,map[string]interface{}{
		"message":"Ok",
		"user":user_data,
	})
}

func UpdateUser(c echo.Context) error{
	id:=c.Param("id")
	var user models.User

	if err:=c.Bind(&user);err!=nil{
		return c.JSON(http.StatusBadRequest,map[string]string{
			"message":"Не удалось парсить JSON",
		})
	}

	if err:=database.Db.Model(&user).Where("id = ?",id).Updates(&user);err!=nil{
		return c.JSON(http.StatusBadRequest,map[string]string{
			"message":"Не удалось обновить данные",
		})
	}

	return c.JSON(http.StatusOK,map[string]string{
		"message":"Ok",
	})
}

func DeleteUser(c echo.Context) error{
	id:=c.Param("id")
	var user models.User
	result:=database.Db.First(&user,id)

	if result.Error!=nil{
		return c.JSON(http.StatusBadRequest,map[string]string{
			"message":"Ошибка",
		})
	}

	result = database.Db.Delete(&user)

	return c.JSON(http.StatusOK,map[string]string{
		"message":"OK",
	})
}