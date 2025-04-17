import { CategoryModel } from "../models/CategoryI";


export interface CreateProductDto{
    categoryId:number
    name:string
    description:string
    price:number
    count:number
}