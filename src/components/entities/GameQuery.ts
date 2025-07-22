import { Genre } from "../components/entities/Genre";
import { Platform } from "./usePlatforms";



export interface GameQuery {
  // modified here made all the props as optional since the genre and platform is optional, this is for consistency of the code
  genre?: Genre;
  platform?: Platform;
  sortOrder?: string;
  searchText?: string;
}
