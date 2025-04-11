package models

import "gorm.io/gorm"

type Image struct{
	gorm.Model
	Name string `json:"name"`
	ProductID uint `json:"-"`
}