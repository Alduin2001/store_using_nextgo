import { apiClient } from "@/configs/apiClient";
import { CreateUserDto } from "@/interfaces/dto/user.dto";


export default class UserAPI{
    static async create(data:CreateUserDto):Promise<any>{
        try {
            const response = await apiClient.post("/user/create",data);
            return response;
        } catch (error) {
            return error;
        }
    }
}