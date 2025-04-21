import { CategoryModel } from "../models/CategoryI";


export interface CreateProductDto{
    categoryId:number
    name:string
    description:string
    price:number
    count:number
}

export interface SearchProductDto{
    category?:string
    name?:string
    minPrice?:number
    maxPrice?:number
}