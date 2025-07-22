import { QueriesObserver, useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client"
import { Game } from "../components/entities/Game";

const apiClient = new APIClient<Game>("/games");

const useGameDescription =  (slug : string , queries : number) =>  {
    console.log(queries)
    const fetchApi = (pageParam : number, slug : string)=> apiClient.get(slug, {params : {
         _start : (pageParam - 1) * queries,
            _limit : queries 
    }})

   const query =  useQuery({
    queryKey : ['games', slug],
    queryFn : ({pageParam }) => fetchApi(pageParam = 1, slug)
   })

   return query;
}

   export default useGameDescription;