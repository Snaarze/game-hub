import { create } from "zustand";
import  GameQueryStore  from "../components/entities/GameQueryStore";


const useGameStore = create<GameQueryStore>( set => ({
   gameQuery : {},
   setSearchText :  (searchText) => set(() => ({gameQuery : {searchText}})),
   setGenre : (genre) => set(store => ({gameQuery : {...store.gameQuery, genre}})),
   setPlatform : (platform) => set(store => ({gameQuery : {...store.gameQuery, platform}})),
    setSortOrder : (sortOrder) => set(() =>({gameQuery : {sortOrder}}))
}))

export default useGameStore;