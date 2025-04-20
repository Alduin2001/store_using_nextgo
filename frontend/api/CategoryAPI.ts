import { apiClient } from "@/configs/apiClient";
import { CreateCategoryDto } from "@/interfaces/dto/category.dto";


export default class CategoryAPI{
    static async create(data:CreateCategoryDto):Promise<any>{
        try {
            const response = await apiClient.post('/category',data);
            return response;
        } catch (error) {
            throw error;
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
    static async update(id:number,data:CreateCategoryDto){
        try {
            const response = await apiClient.patch(`/category/${id}`,data);
            return response;
        } catch (error) {
            throw error;
        }
    }
    static async remove(id:number):Promise<any>{
        try {
            const response = await apiClient.delete(`/category/${id}`);
            return response;
        } catch (error) {
            return error;
        }
    }
}