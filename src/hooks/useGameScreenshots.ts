import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client"
import { GameTrailer } from "../components/entities/GameTrailer";
import { GameScreenshots } from "../components/entities/GameScreenshots";



const useGameScreenshots = (slug : string) => {
    const apiClient = new APIClient<GameScreenshots>(`/games/${slug}/screenshots`);
    const query = useQuery ( {
    queryKey : ['screenhots', slug],
    queryFn : apiClient.getAll
    })
    return query
}
export default useGameScreenshots;