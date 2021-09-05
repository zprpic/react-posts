import { useState, useEffect } from "react";

export const useFetchPost = (url, id) => {
  const [isLoadingPost, setIsLoadingPost] = useState(true);
  const [errorLoadingPost, setErrorLoadingPost] = useState(false);
  const [post, setPost] = useState("");

  const getPost = async () => {
    try {
      const response = await fetch(`${url}/posts/${id}`);
      const post = await response.json();
      setPost(post);
    } catch (error) {
      setErrorLoadingPost(error);
      console.log(error);
    } finally {
      setIsLoadingPost(false);
    }
  };

  useEffect(() => {
    getPost(url, id);
  }, [url]);
  return { isLoadingPost, errorLoadingPost, post };
};
