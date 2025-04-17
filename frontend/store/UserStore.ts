import UserAPI from "@/api/UserAPI";
import { CreateUserDto, LoginUserDto } from "@/interfaces/dto/user.dto";
import { create } from "zustand";
import { UserStoreI } from "@/interfaces/store_int/UserStoreI";

export const useUserStore = create<UserStoreI>((set)=>({
    isAuth:false,
    role:0,
    setIsAuth:(data)=>{
        set({isAuth:data});
    },
    registerUser:async (data:CreateUserDto)=>{
        const response = await UserAPI.create(data);
        console.log(response);
    },
    getProfile:async ()=>{
        const response = await UserAPI.getProfile();
        return response;
    },
    loginUser:async (data:LoginUserDto)=>{
        const response = await UserAPI.login(data);
        if(response.status>=200 && response.status<300){
            set({isAuth:true,role:response.data.role})
        }
        return response;
    },
    checkAuth:async ()=>{
        const response = await UserAPI.checkAuth();
        if(response.status>=200 && response.status<300){
            set({isAuth:true,role:response.data.role});
        }
    },
    logoutUser:async ()=>{
        const response = await UserAPI.logout();
        console.log(response);
        if(response.status>=200 && response.status<300){
            set({isAuth:false,role:0});
        }
    },
    getUsers:async ()=>{

    },
    deleteUser:async ()=>{
        
    }
}))