import { Genre } from "./Genre";
import { Platform } from "./Platform";


export interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  parent_platforms: { platform: Platform; }[];
  metacritic: number;
  description_raw: string;
  background_image_additional: string;
  platforms : {platform : Platform}[]
  genres :  Genre[];
}
