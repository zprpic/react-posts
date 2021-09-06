import { useState, useEffect } from "react";
import { fetchPosts } from "../services/fetchPosts";

export const useFetchPosts = (url, id) => {
  const [isLoadingPosts, setIsLoadingPosts] = useState(true);
  const [errorLoadingPosts, setErrorLoadingPosts] = useState(false);
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const posts = await fetchPosts(url, id);
      setPosts(posts);
    } catch (error) {
      setErrorLoadingPosts(error);
      console.log(error);
    } finally {
      setIsLoadingPosts(false);
    }
  };

  useEffect(() => {
    getPosts(url, id);
  }, [url]);
  return { isLoadingPosts, errorLoadingPosts, posts };
};
