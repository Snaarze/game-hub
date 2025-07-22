import { GameQuery } from "../components/entities/GameQuery";
import { Genre } from "../components/entities/Genre";
import { Platform } from "../components/entities/Platform";

export interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setSortOrder: (sortOrder: string) => void;
  setGenre: (genre: Genre) => void;
  setPlatform: (platform: Platform) => void;
}
