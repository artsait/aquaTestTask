import axios from "axios";
import storageService from "../LocalStorageService";

const istance = axios.create();

istance.interceptors.request.use(
    config => {
        const token: string | null = storageService.getToken();
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        config.baseURL = "https://api.aqua-delivery.ru/v1/"
        return config;
    },
    error => {
        Promise.reject(error)
    });


export const API = {
    login(data: object) {
        return istance.post('auth/login/', data)
    },
    getMessage() {
        return istance.get('chat/get-messages?id=12233')
    }
}
