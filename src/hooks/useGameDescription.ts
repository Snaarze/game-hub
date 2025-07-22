import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client"
import { Game } from "./useGame";
import useGameStore from "./useGameStore";



 const apiClient = new APIClient<Game>("/games");

const useGameDescription =  (slug : string) =>  useQuery({
   
    queryKey : ['games', slug],
    queryFn : () => apiClient.get(slug)
   })

   export default useGameDescription;