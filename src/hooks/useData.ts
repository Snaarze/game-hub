import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchResponse<T>{
    count :string,
    results : T[]
}

const useData = <T>(endpoint : string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // this function is for cancelling fetching data if the user will navigate to other page to prevent the data to continue fetching if the user is gone
    const controler = new AbortController();
    apiClient
    // this object is part of the controller object  which require or to tell that we want to control the data
      .get<FetchResponse<T>>(endpoint, {signal : controler.signal})
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message)
         setLoading(false)
      });

      return () => controler.abort()
  }, []);

  return {data, error, isLoading}
}




export default useData;
