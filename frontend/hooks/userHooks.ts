import UserAPI from "@/api/UserAPI";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateUserDto } from "@/interfaces/dto/user.dto";
export const useProfileUser = ()=>{

    return useQuery(['users'],()=>UserAPI.getProfile())
}

export const useRegisterUser = ()=>{
    const queryClient = useQueryClient();
    return useMutation((data:CreateUserDto)=>UserAPI.create(data),{
        
    })
}