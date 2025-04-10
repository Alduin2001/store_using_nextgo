package models

import "gorm.io/gorm"

type User struct{
	gorm.Model
	Name string `json:"name"`
	Surname string `json:"surname"`
	Email string `json:"email" gorm:"uniqueIndex"`
	Password string `json:"password"`
	Role string `gorm:"default:user"`
}