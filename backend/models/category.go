package models

import (
	"gorm.io/gorm"
)


type Category struct{
	gorm.Model
	Name string `json:"name" gorm:"uniqueIndex"`
	Products []Product `json:"products"`
}