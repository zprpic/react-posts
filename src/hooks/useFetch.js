import { useState, useEffect } from "react";
import { fetchJSON } from "../helpers/fetchJSON.js";

export const useFetch = (url) => {
  const [loadingData, setLoadingData] = useState(true);
  const [errorLoadingData, setErrorLoadingData] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchJSON(url);
        setData(data);
      } catch (error) {
        setErrorLoadingData(error);
      } finally {
        setLoadingData(false);
      }
    };
    fetchData();
  }, [url]);
  return { loadingData, errorLoadingData, data };
};
