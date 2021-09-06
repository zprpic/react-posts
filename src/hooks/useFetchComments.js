import { useState, useEffect } from "react";
import { getComments } from "../services/getComments";

export const useFetchComments = (url, id) => {
  const [isLoadingComments, setIsLoadingComments] = useState(true);
  const [errorLoadingComments, setErrorLoadingComments] = useState(false);
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    try {
      const comments = await getComments(url, id);
      setComments(comments);
    } catch (e) {
      setErrorLoadingComments(e);
      console.log(e);
    } finally {
      setIsLoadingComments(false);
    }
  };

  useEffect(() => {
    fetchComments(url, id);
  }, [url]);
  return { isLoadingComments, errorLoadingComments, comments };
};
