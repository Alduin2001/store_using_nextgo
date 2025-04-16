import { create } from "zustand";
import { CategoryStoreI } from "@/interfaces/store_int/CategoryStoreI";
import CategoryAPI from "@/api/CategoryAPI";

export const useCategoryStore = create<CategoryStoreI>((set)=>({
    categories:[],
    addCategory:async (data)=>{
        const response = await CategoryAPI.create(data);
        console.log(response);
    },
    getCategories:async ()=>{
        const response = await CategoryAPI.get();
        set({categories:response.data.categories})
    },
    updateCategory:async (id, data)=>{
        
    },
    deleteCategory:async (id)=>{
        
    },
    
}))