import { IsEmail, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    name:string
    @IsString()
    surname:string
    @IsEmail({},{message:"Должна быть почта"})
    email:string
    @MinLength(6,{message:"Пароль должен содержать минимум 6 символов"})
    password:string
}
