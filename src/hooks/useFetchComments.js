import { useState, useEffect } from "react";
import { groupCommentsByPostID } from "../helpers/groupCommentsByPostID";

export const useFetchComments = (url) => {
  const [isLoadingComments, setIsLoadingComments] = useState(true);
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    const response = await fetch(`${url}/comments`);
    const data = await response.json();

    const comments = groupCommentsByPostID(data);

    setComments(comments);
    setIsLoadingComments(false);
  };

  useEffect(() => {
    getComments(url);
  }, [url]);
  return { isLoadingComments, comments };
};
