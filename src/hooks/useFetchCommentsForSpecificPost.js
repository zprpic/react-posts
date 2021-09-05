import { useState, useEffect } from "react";

export const useFetchCommentsForSpecificPostForSpecificPost = (url, id) => {
  const [
    isLoadingCommentsForSpecificPost,
    setIsLoadingCommentsForSpecificPost,
  ] = useState(true);
  const [
    errorLoadingCommentsForSpecificPost,
    setErrorLoadingCommentsForSpecificPost,
  ] = useState(false);
  const [CommentsForSpecificPost, setCommentsForSpecificPost] = useState("");

  const getCommentsForSpecificPost = async () => {
    try {
      const response = await fetch(`${url}/posts/${id}/comments`);
      const CommentsForSpecificPost = await response.json();
      setCommentsForSpecificPost(CommentsForSpecificPost);
    } catch (e) {
      setErrorLoadingCommentsForSpecificPost(e);
      console.log(e);
    } finally {
      setIsLoadingCommentsForSpecificPost(false);
    }
  };

  useEffect(() => {
    getCommentsForSpecificPost(url, id);
  }, [url]);
  return {
    isLoadingCommentsForSpecificPost,
    errorLoadingCommentsForSpecificPost,
    CommentsForSpecificPost,
  };
};
