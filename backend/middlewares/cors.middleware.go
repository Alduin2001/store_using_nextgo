package middlewares
import "github.com/labstack/echo/v4/middleware"

func CorsMiddleware(){

	middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"http://localhost:3000"},
		AllowMethods: []string{"GET","POST","PUT","PATCH","DELETE"},
		AllowCredentials: true,
	})
}