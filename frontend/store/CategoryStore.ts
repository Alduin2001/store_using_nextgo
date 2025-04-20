import { create } from "zustand";
import { CategoryStoreI } from "@/interfaces/store_int/CategoryStoreI";
import CategoryAPI from "@/api/CategoryAPI";
import { toast } from "react-toastify";

export const useCategoryStore = create<CategoryStoreI>((set,get)=>({
    categories:[],
    selectedId:0,
    isOpenDelete:false,
    isOpenEdit:false,
    openDelete:(id)=>{
        set({selectedId:id,isOpenDelete:true});
    },
    closeDelete:()=>{
        set({selectedId:0,isOpenDelete:false});
    },
    openEdit:(id)=>{
        set({selectedId:id,isOpenEdit:true});
    },
    closeEdit:()=>{
        set({selectedId:0,isOpenEdit:false});
    },
    addCategory:async (data)=>{
        try {
            const response = await CategoryAPI.create(data);
            toast.success('Категория добавлена');
            console.log(response);   
            return response;
        } catch (error) {
            toast.error('Не удалось добавить категорию');
            throw error;
        }
    },
    getCategories:async ()=>{
        const response = await CategoryAPI.get();
        set({categories:response.data.categories})
    },
    updateCategory:async (data)=>{
        try {
            const response = await CategoryAPI.update(get().selectedId,data);
            set(state=>({
                ...state,
                categories:state.categories.map(el=>el.id==get().selectedId ? {id:get().selectedId,name:data.name} : el)
            }));
            console.log(response);
            toast.success('Категория обновлена');
            return response;
        } catch (error) {
            toast.error('Категория не обновлена');
            throw error;
        }
    },
    deleteCategory:async ()=>{
        const response = await CategoryAPI.remove(get().selectedId);
        if(response.status>=200 && response.status<300){
            set(state=>({
                ...state,
                categories:state.categories.filter(el=>el.id!=get().selectedId)
            }));
        }
        console.log(response);
        return response;
    },
    
}))