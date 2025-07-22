import { create } from "zustand";
import { Genre } from "./useGenre";
import { Platform } from "./usePlatforms";


export interface GameQuery {
    // modified here made all the props as optional since the genre and platform is optional, this is for consistency of the code
  genre?: Genre;
  platform?: Platform;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore{
    gameQuery : GameQuery
    setSearchText : (searchText : string ) => void
    setSortOrder : (sortOrder : string) => void
    setGenre : (genre : Genre) => void
    setPlatform : (platform : Platform) => void  
}

const useGameStore = create<GameQueryStore>( set => ({
   gameQuery : {},
   setSearchText :  (searchText) => set(() => ({gameQuery : {searchText}})),
   setGenre : (genre) => set(store => ({gameQuery : {...store.gameQuery, genre}})),
   setPlatform : (platform) => set(store => ({gameQuery : {...store.gameQuery, platform}})),
    setSortOrder : (sortOrder) => set(() =>({gameQuery : {sortOrder}}))
}))

export default useGameStore;