import { IsEmail, MinLength } from "class-validator";

export class CreateAuthDto {
    @IsEmail({},{message:"Должна быть почта"})
    email:string
    @MinLength(4,{message:"Минимум 4 символа"})
    password:string
}
