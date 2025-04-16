import { CreateCategoryDto } from "../dto/category.dto"
import { CategoryModel } from "../models/CategoryI"

export interface CategoryStoreI{
    categories:CategoryModel[],
    addCategory:(data:CreateCategoryDto)=>Promise<any>
    getCategories:()=>Promise<any>
    updateCategory:(id:number,data:CreateCategoryDto)=>Promise<any>
    deleteCategory:(id:number)=>Promise<any>
}