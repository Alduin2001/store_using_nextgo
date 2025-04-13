import { apiClient } from "@/configs/apiClient";
import { CreateCategoryDto } from "@/interfaces/dto/category.dto";


export default class CategoryAPI{
    static async create(data:CreateCategoryDto){
        try {
            const response = await apiClient.post('/category/create',data);
            return response;
        } catch (error) {
            return error
        }
    }
    static async get(){
        try {
            const response = await apiClient.get('/category/all');
            return response;
        } catch (error) {
            return error;
        }
    }
}