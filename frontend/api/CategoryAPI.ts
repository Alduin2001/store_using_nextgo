import { apiClient } from "@/configs/apiClient";


export default class CategoryAPI{
    static async create(){
        try {
            const response = await apiClient.post('',{});
            return response;
        } catch (error) {
            return error
        }
    }
}