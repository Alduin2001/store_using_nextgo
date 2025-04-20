import { CreateCategoryDto } from "../dto/category.dto"
import { CategoryModel } from "../models/CategoryI"

export interface CategoryStoreI{
    categories:CategoryModel[],
    selectedId:number,
    isOpenDelete:boolean
    isOpenEdit:boolean
    openDelete:(id:number)=>void
    closeDelete:()=>void
    openEdit:(id:number)=>void
    closeEdit:()=>void
    addCategory:(data:CreateCategoryDto)=>Promise<any>
    getCategories:()=>Promise<any>
    updateCategory:(data:CreateCategoryDto)=>Promise<any>
    deleteCategory:()=>Promise<any>
}