import { useInfiniteQuery, keepPreviousData } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient from "../services/api-client";
import { Platform } from "./usePlatforms";

export interface Game {
  results: any;
  id: number;
  name: string;
  background_image : string
  parent_platforms : {platform : Platform}[]
  metacritic : number
}

// this function is flexible as this receive parameters which are built in for axios parameters for dynamic query
// passed a dependencies if the current state changed to fetch the data and re-render the component
// params can be any type of variables since the params are object it wil concat the url and the config of the params which will be /games?selected.id || id=1
// each params will be used depending on the selected filtered by user they can be combined as those query are optionals
const useGames = (gameQuery : GameQuery) => {
  const apiClient = new APIClient<Game>('games');
   const query = useInfiniteQuery({
    queryKey : ['games', gameQuery],
    queryFn : ({pageParam = 1}) => apiClient.getAll(
      {params : { 
        genres : gameQuery.genre?.id,
        parent_platforms : gameQuery.platform?.id,
        ordering : gameQuery.sortOrder,
        search : gameQuery.searchText,
        page : pageParam
      }}),
      placeholderData : keepPreviousData,
        // initialPageParam is now required  to use the useInfiniteQuery as of July 17, 2025 via documentation
        initialPageParam : 1, 
        // allPages is a post array inside a post array
        getNextPageParam : (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined;
        }
        }
      )

  return query;
  
};
export default useGames