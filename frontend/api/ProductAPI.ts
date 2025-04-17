import { apiClient } from "@/configs/apiClient";

export default class ProductAPI{

    static async create(form:FormData):Promise<any>{
        try {
            const response = await apiClient.post('/product',form);
            return response;
        } catch (error) {
            return error;
        }
    }
    static async get(){
        try {
            const response = await apiClient.get('/product');
            return response;
        } catch (error) {
            return error;
        }
    }
}