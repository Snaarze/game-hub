import { GameQuery } from "../App";
import useData from "./useData";

export interface platform {
    id : number,
    name : string,
    slug : string
}

export interface Game {
  id: number;
  name: string;
  background_image : string
  parent_platforms : {platform : platform}[]
  metacritic : number
}

// this function is flexible as this receive parameters which are built in for axios parameters for dynamic query
// passed a dependencies if the current state changed to fetch the data and re-render the component
// params can be any type of variables since the params are object it wil concat the url and the config of the params which will be /games?selected.id || id=1
// each params will be used depending on the selected filtered by user they can be combined as those query are optionals
const useGames = (gameQuery : GameQuery) => useData<Game>('/games', {params : { genres : gameQuery.genre?.id, platforms : gameQuery.platform?.id, ordering : gameQuery.sortOrder, search : gameQuery.searchText
}}, [gameQuery]);

export default useGames