import { ModalStoreI } from "@/interfaces/store_int/ModalStoreI";
import { create } from "zustand";


export const useModalStore = create<ModalStoreI>((set)=>({
    isOpen:false,
    type:null,
    data:{},
    close:()=>{
        set({
            isOpen:false,
            type:null,
            data:{}
        })
    },
    open:(type, data)=>{
        set({
            isOpen:true,
            data:{...data,cancelText:data?.cancelText || 'Отмена',submitText:data?.submitText || 'Подтвердить'},
            type:type
        });
    },
}))