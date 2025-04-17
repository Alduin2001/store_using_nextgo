import { ProductModel } from "../models/ProductI"


export interface ProductStoreI{
    products:ProductModel[],
    addProduct:(data:FormData)=>Promise<any>
    getProducts:()=>Promise<any>
    getOneProduct:(id:number)=>Promise<any>
    updateProduct:(id:number,data:FormData)=>Promise<any>
    deleteProduct:(id:number)=>Promise<any>
}