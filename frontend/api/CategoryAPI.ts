import { apiClient } from "@/configs/apiClient";
import { CreateCategoryDto } from "@/interfaces/dto/category.dto";


export default class CategoryAPI{
    static async create(data:CreateCategoryDto):Promise<any>{
        try {
            const response = await apiClient.post('/category',data);
            return response;
        } catch (error) {
            return error
        }
    }
    static async get():Promise<any>{
        try {
            const response = await apiClient.get('/category');
            return response;
        } catch (error) {
            return error;
        }
    }
}