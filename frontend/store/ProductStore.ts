import { create } from "zustand";


export const useProductStore = create((set)=>({
    products:[],
    selectedId:0,

    addProduct:async (data:FormData)=>{

    },
    getProducts:async ()=>{

    },
    getOneProduct:async ()=>{

    },
    updateProduct:async ()=>{

    },
    deleteProduct:async (id:number)=>{

    }

}));