package utils

import (
	customstructs "backend/custom_structs"
	"time"

	"github.com/golang-jwt/jwt/v5"
)



func GenerateToken(payload *customstructs.Payload)  (string,error){
	token := jwt.NewWithClaims(jwt.SigningMethodHS256,jwt.MapClaims{
		"id":payload.Id,
		"role":payload.Role,
		"exp":time.Now().Add(time.Hour*24).Unix(),
	})
	return token.SignedString([]byte("secret"))
}

func ReadToken(token string){
	// var payload customstructs.Payload
	// secret:= []byte("secret")
	// payload = jwt.Parse(token,secret)
}