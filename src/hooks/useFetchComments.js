import { useState, useEffect } from "react";
import { groupCommentsByPostID } from "../helpers/groupCommentsByPostID";

export const useFetchComments = (url) => {
  const [isLoadingComments, setIsLoadingComments] = useState(true);
  const [errorLoadingComments, setErrorLoadingComments] = useState(false);
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    try {
      const response = await fetch(`${url}/comments`);
      const data = await response.json();

      const comments = groupCommentsByPostID(data);

      setComments(comments);
    } catch (e) {
      setErrorLoadingComments(e);
      console.log(e);
    } finally {
      setIsLoadingComments(false);
    }
  };

  useEffect(() => {
    getComments(url);
  }, [url]);
  return { isLoadingComments, errorLoadingComments, comments };
};
