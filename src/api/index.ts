import axios, { AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders } from "axios";
import { auth } from '../constants/firebase';

class APIService {
    private instance: AxiosInstance;
    private defaultHeaders: AxiosRequestHeaders = {
        "Content-Type": "application/json",
        "Accept": "application/json"
    };

    constructor(url: string) {
        this.instance = axios.create({
            baseURL: url,
            timeout: 10000
        })
    }

    private async getHeaders(): Promise<AxiosRequestHeaders> {
        const token = await auth.currentUser?.getIdToken();
        const headers: AxiosRequestHeaders = {
            ...this.defaultHeaders,
            Authorization: token ? `Bearer ${token}` : ''
        }
        console.log(headers);
        return headers;
    }

    public async get(endpoint: string): Promise<any> {
        const headers = await this.getHeaders();
        return await this.instance.get(endpoint, { headers });
    }

    public async post(endpoint: string, data: any) {
        const headers = await this.getHeaders();
        return await this.instance.post(endpoint, data, { headers });
    }

    public async delete(endpoint: string) {
        const headers = await this.getHeaders();
        return await this.instance.delete(endpoint, { headers });
    }
}

export default new APIService("http://localhost:4000");
// export default new APIService("http://10.0.0.74:4000");
// export default new APIService("http://10.0.0.10:4000");