import UserAPI from "@/api/UserAPI";
import { CreateUserDto, LoginUserDto } from "@/interfaces/dto/user.dto";
import { create } from "zustand";


export const useUserStore = create((set)=>({
    isAuth:false,

    registerUser:async (data:CreateUserDto)=>{
        const response = await UserAPI.create(data);
        console.log(response);
    },
    loginUser:async (data:LoginUserDto)=>{
        console.log(data);
    },
    logoutUser:async ()=>{
        
    }
}))