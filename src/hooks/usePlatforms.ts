import { useQuery } from "@tanstack/react-query";
// import apiClient, { axiosInstance } from "../services/api-client";
import APIClient from "../services/api-client";

export interface Platform {
    id : number,
    name : string,
    slug : string
}



const apiCLient = new APIClient<Platform>('platforms/lists/parents')

const usePlatforms = () => {
    
   const query =  useQuery({
        queryKey : ['platforms'],
        queryFn : apiCLient.getAll,
        staleTime : 24 * 60 *  60 * 1000,
    })
    
    return query
}
   

export default usePlatforms;