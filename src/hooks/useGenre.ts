import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


interface Genre {
    id : number,
    name : string
}

interface FetchGenreRespose {
    count :string,
    results : Genre[]
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // this function is for cancelling fetching data if the user will navigate to other page to prevent the data to continue fetching if the user is gone
    const controler = new AbortController();
    apiClient
    // this object is part of the controller object  which require or to tell that we want to control the data
      .get<FetchGenreRespose>("/genres", {signal : controler.signal})
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message)
         setLoading(false)
      });

      return () => controler.abort()
  }, []);

  return {genres, error, isLoading}
}




export default useGenres;
