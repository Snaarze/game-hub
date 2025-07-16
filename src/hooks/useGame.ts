import useData from "./useData";
import { Genre } from "./useGenre";

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
const useGames = (selectedGenre : Genre | null) => useData<Game>('/games', {params : { genres : selectedGenre?.id}}, [selectedGenre?.id]);

export default useGames