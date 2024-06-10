/**
 * 后期写从服务器读取各个传感器状态信息,现在先做个示例
 * 有条件继续写
 * */
import axios from 'axios'
import type {AxiosInstance,AxiosRequestConfig} from 'axios'
export class Request{
    instance:AxiosInstance;
    constructor(config:AxiosRequestConfig) {
        this.instance = axios.create(config)
        this.instance.interceptors.request.use((config)=>{
            const token = localStorage.getItem("react-park")
            if (token){
                config.headers.Authorization = `Bearer ${token}`
            }
            return config
        },error => {
            return Promise.reject(error)
        })
    }
    public request(config:AxiosRequestConfig){
        return this.instance.request(config)
    }
}