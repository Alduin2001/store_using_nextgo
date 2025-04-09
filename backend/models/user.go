package models

import "gorm.io/gorm"

type User struct{
	gorm.Model
	Name string `json:"name"`
	Surname string `json:"surname" gorm:"index:unique"`
	Email string `json:"email"`
	Password string `json:"password"`
	Role string `gorm:"default:role"`
}