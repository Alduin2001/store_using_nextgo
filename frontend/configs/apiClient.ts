import { useUserStore } from "@/store/UserStore";
import axios, { AxiosResponse } from "axios";

export const apiClient = axios.create({
    baseURL: "http://localhost:3005",
    withCredentials: true
})

apiClient.interceptors.response.use(
    (res) => res,
    (error) => {
        const { setIsAuth } = useUserStore.getState();

        if (error.response?.status == 401) {
            setIsAuth(false);
        }
        return Promise.reject(error);
    }
)