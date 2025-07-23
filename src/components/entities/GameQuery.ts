import  Genre  from "./Genre";
import Platform from "./Platform"



export default  interface GameQuery {
  // modified here made all the props as optional since the genre and platform is optional, this is for consistency of the code
  genre?: Genre;
  platform?: Platform;
  sortOrder?: string;
  searchText?: string;
}
