import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client"
import GameTrailer  from "../components/entities/GameTrailer";

const apiClient = new APIClient<GameTrailer>("/games");


const useGameTrailer = (slug : string) => useQuery ( {
    queryKey : ['trailers', slug],
    queryFn :  () => apiClient.getMovies(slug)
})

export default useGameTrailer;