package utils

import (
	"net/http"
	"time"
)

func SetJWTCookie(token string)  http.Cookie{
	cookie := http.Cookie{
		Name: "jwt",
		Value: token,
		Path: "/",
		HttpOnly: true,
		Expires: time.Now().Add(24*time.Hour),
	}
	return cookie
}