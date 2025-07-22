import axios, { AxiosRequestConfig } from "axios"
import { FetchResponse } from "../hooks/useData";
export const axiosInstance =  axios.create({
    baseURL : 'https://api.rawg.io/api',
    params  : {
        key : 'fc8b4562e11541eeb98d234c726a5e5b'
    }
})

class APIClient<T> {
    endpoint : string

    constructor(endpoint : string){
        this
        .endpoint = endpoint;
    }
    // type is not needed here because we are already specifying the data type on the class itself
    // need to make the function to arrow function to remove the bind of the this pointer and point it to the function who call it
    get = (id : number | string)  => {
        return axiosInstance.get<T>(this.endpoint + "/" + id).then(res => res.data)
    }
    // params for query filtering
    getAll = (requestConfig : AxiosRequestConfig) =>  {
        return axiosInstance.get<FetchResponse<T>>(this.endpoint, requestConfig).then(res => res.data)
    }
}

export default APIClient;