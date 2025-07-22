import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

export interface FetchResponse<T>{
    count :string,
    next : string | null
    results : T[]
}
// request config is option which means the following data would be optional too, intialize the dependencies for changes in the fetching
const useData = <T>(endpoint : string, requestConfig? : AxiosRequestConfig, deps? : any[]) => {
  // const [data, setData] = useState<T[]>([]);
  // const [error, setError] = useState("");
  // const [isLoading, setLoading] = useState(false);

  // useEffect(() => {
  //   // this function is for cancelling fetching data if the user will navigate to other page to prevent the data to continue fetching if the user is gone
  //   const controler = new AbortController();
  //   setLoading(true);
  //   apiClient
  //   // this object is part of the controller object  which require or to tell that we want to control the data
  //   // spread the config object to add the query which will be base on the api call, the object should be on the URLBase, or plain object to make it work
  //     .get<FetchResponse<T>>(endpoint, {signal : controler.signal, ...requestConfig})
  //     .then((res) => {
  //       setData(res.data.results);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       if(err instanceof CanceledError) return;
  //       setError(err.message)
  //        setLoading(false)
  //     });

  //     return () => controler.abort()
  //     // fetch teh data depending on the condition matched, 
  // },deps ? [...deps] : []);

  // return {data, error, isLoading}
}




export default useData;
