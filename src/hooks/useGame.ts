import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


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

interface FetchGamesResponse {
  count: number;
  results: Game[];
}




const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // this function is for cancelling fetching data if the user will navigate to other page to prevent the data to continue fetching if the user is gone
    const controler = new AbortController();
    apiClient
    // this object is part of the controller object  which require or to tell that we want to control the data
      .get<FetchGamesResponse>("/games", {signal : controler.signal})
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message)
         setLoading(false)
      });

      return () => controler.abort()
  }, []);

  return {games, error, isLoading}
}

export default useGames