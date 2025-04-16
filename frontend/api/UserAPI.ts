import { apiClient } from "@/configs/apiClient";
import { CreateUserDto, LoginUserDto } from "@/interfaces/dto/user.dto";


export default class UserAPI{
    static async create(data:CreateUserDto):Promise<any>{
        try {
            const response = await apiClient.post("/user",data);
            return response;
        } catch (error) {
            return error;
        }
    }
    static async login(data:LoginUserDto):Promise<any>{
        try {
            const response = await apiClient.post("/auth/login",data);
            return response;
        } catch (error) {
            return error;
        }
    }
    static async getProfile():Promise<any>{
        try {
            const response = await apiClient.get('/auth/profile');
            return response;
        } catch (error) {
            return error;
        }
    }
    static async checkAuth():Promise<any>{
        try {
            const response = await apiClient.get('/auth/checkAuth');
            return response;
        } catch (error) {
            return error           
        }
    }
    static async logout():Promise<any> {
        try {
            const response = await apiClient.post('/auth/logout',{});
            return response;
        } catch (error) {
            return error;           
        }
    }
}