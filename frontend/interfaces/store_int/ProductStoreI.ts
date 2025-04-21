import { SearchProductDto } from "../dto/product.dto"
import { ProductModel } from "../models/ProductI"


export interface ProductStoreI{
    products:ProductModel[],
    selectedId:number,
    isOpenDelete:boolean
    isOpenEdit:boolean
    minimum:number
    openDeleteModal:(id:number)=>void
    closeDeleteModal:()=>void
    openEditModal:(id:number)=>void
    closeEditModal:()=>void
    searchProducts:(params:SearchProductDto)=>void
    addProduct:(data:FormData)=>Promise<any>
    getProducts:()=>Promise<any>
    getOneProduct:(id:number)=>Promise<any>
    updateProduct:(data:FormData)=>Promise<any>
    deleteProduct:()=>Promise<any>
}