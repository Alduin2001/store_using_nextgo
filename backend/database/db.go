package database

import (
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var Db *gorm.DB

func InitDB() {
	// Загрузка переменных из файла .env
	if err := godotenv.Load(); err != nil {
		log.Print("No .env file found")
	}

	// Получение строки подключения из переменной окружения
	dbString := os.Getenv("DB")

	var err error
	Db, err = gorm.Open(postgres.Open(dbString), &gorm.Config{})
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Успешное подключение к базе данных")
}
