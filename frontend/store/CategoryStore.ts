import { CreateCategoryDto } from "@/interfaces/dto/category.dto";
import { create } from "zustand";


export const useCategoryStore = create((set)=>({
    categories:[],

    createCategory:async (data:CreateCategoryDto)=>{
        try {
            
        } catch (error) {
            
        }
    },
    getCategories:async ()=>{
        try {
            
        } catch (error) {
            
        }
    }
}))