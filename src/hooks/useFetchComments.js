import { useState, useEffect } from "react";
import { fetchComments } from "../services/fetchComments";

export const useFetchComments = (url, id) => {
  const [isLoadingComments, setIsLoadingComments] = useState(true);
  const [errorLoadingComments, setErrorLoadingComments] = useState(false);
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    try {
      const comments = await fetchComments(url, id);
      setComments(comments);
    } catch (e) {
      setErrorLoadingComments(e);
      console.log(e);
    } finally {
      setIsLoadingComments(false);
    }
  };

  useEffect(() => {
    getComments(url, id);
  }, [url]);
  return { isLoadingComments, errorLoadingComments, comments };
};
