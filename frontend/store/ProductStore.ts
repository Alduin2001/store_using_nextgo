import ProductAPI from "@/api/ProductAPI";
import { ProductStoreI } from "@/interfaces/store_int/ProductStoreI";
import { toast } from "react-toastify";
import { create } from "zustand";


export const useProductStore = create<ProductStoreI>((set,get)=>({
    products:[],
    selectedId:0,
    isOpenDelete:false,
    isOpenEdit:false,
    openDeleteModal:(id)=>{
        set({selectedId:id,isOpenDelete:true});
    },
    closeDeleteModal:()=>{
        set({selectedId:0,isOpenDelete:false});
    },
    openEditModal:(id)=>{
        set({isOpenEdit:true,selectedId:id});
    },
    closeEditModal:()=>{
        set({selectedId:0,isOpenEdit:false});
    },
    addProduct:async (data)=>{
        const response = await ProductAPI.create(data);
        console.log(response);
        return response;
    },
    getProducts:async ()=>{
        const response = await ProductAPI.get();
        set({products:response.data.products})
    },
    getOneProduct:async (id)=>{

    },
    updateProduct:async (data)=>{

    },
    deleteProduct:async ()=>{
        const response = await ProductAPI.remove(get().selectedId);
        if(response.status>=200 && response.status<300){
            toast.success('Товар успешно удалён');
            set((state)=>({
                ...state,
                products: state.products.filter(el=>el.id!==get().selectedId)
            }));
        }
        console.log(response);
        return response;
    }

}));