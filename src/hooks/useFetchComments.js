import { useState, useEffect } from "react";

export const useFetchComments = (url) => {
  const [isLoadingComments, setIsLoadingComments] = useState(true);
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    const response = await fetch(`${url}/comments`);
    const comments = await response.json();

    setComments(comments);
    setIsLoadingComments(false);
  };

  useEffect(() => {
    getComments(url);
  }, [url]);
  return { isLoadingComments, comments };
};