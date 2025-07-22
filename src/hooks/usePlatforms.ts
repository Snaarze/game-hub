import { useQuery } from "@tanstack/react-query";
// import apiClient, { axiosInstance } from "../services/api-client";
import APIClient from "../services/api-client";
import { Platform } from "../components/entities/Platform";

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