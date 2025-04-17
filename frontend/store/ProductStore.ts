import ProductAPI from "@/api/ProductAPI";
import { ProductStoreI } from "@/interfaces/store_int/ProductStoreI";
import { create } from "zustand";


export const useProductStore = create<ProductStoreI>((set)=>({
    products:[],
    selectedId:0,

    addProduct:async (data)=>{
        const response = await ProductAPI.create(data);
        console.log(response);
    },
    getProducts:async ()=>{
        const response = await ProductAPI.get();
        set({products:response.data.products})
        console.log(response);
    },
    getOneProduct:async (id)=>{

    },
    updateProduct:async (id,data)=>{

    },
    deleteProduct:async (id)=>{

    }

}));