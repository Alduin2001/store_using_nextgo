import { apiClient } from "@/configs/apiClient";
import { SearchProductDto } from "@/interfaces/dto/product.dto";

export default class ProductAPI{

    static async create(form:FormData):Promise<any>{
        try {
            const response = await apiClient.post('/product',form);
            return response;
        } catch (error) {
            return error;
        }
    }
    static async get():Promise<any>{
        try {
            const response = await apiClient.get('/product/forUser');
            return response;
        } catch (error) {
            return error;
        }
    }
    static async search(queryParams:SearchProductDto):Promise<any>{
        try {
            const response = await apiClient.get('/product/search',{params:queryParams});
            return response;
        } catch (error) {
            throw error;
        }
    }
    static async remove(id:number):Promise<any>{
        try {
            const response = await apiClient.delete(`/product/${id}`);
            return response;
        } catch (error) {
            return error;
        }
    }
}