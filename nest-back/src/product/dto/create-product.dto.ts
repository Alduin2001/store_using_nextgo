import { Type } from "class-transformer";
import { IsNumber, IsString } from "class-validator";

export class CreateProductDto {
    @Type(()=>Number)
    @IsNumber()
    categoryId:number
    @IsString()
    name:string
    @IsString()
    description:string
    @Type(()=>Number)
    @IsNumber()
    price:number
    @Type(()=>Number)
    @IsNumber()
    count:number
}
