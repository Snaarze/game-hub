import GameQuery  from "./GameQuery";
import  Genre  from "./Genre";
import  Platform  from "./Platform";

export default interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setSortOrder: (sortOrder: string) => void;
  setGenre: (genre: Genre) => void;
  setPlatform: (platform: Platform) => void;
}
