import { CreateUserDto, LoginUserDto } from "../dto/user.dto";

export interface UserStoreI{
    isAuth:boolean,
    role:number,
    registerUser:(data:CreateUserDto)=>Promise<void>,
    loginUser:(data:LoginUserDto)=>Promise<any>,
    setIsAuth:(state:boolean)=>void,
    checkAuth:()=>Promise<void>,
    getProfile:()=>Promise<any>,
    logoutUser:()=>Promise<void>,
    getUsers:()=>Promise<void>,
    deleteUser:()=>Promise<void>
}