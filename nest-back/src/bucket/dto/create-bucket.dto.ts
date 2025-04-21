import { IsNumber } from "class-validator";

export class CreateBucketDto {
    @IsNumber()
    productId:number
    @IsNumber()
    count:number
}
