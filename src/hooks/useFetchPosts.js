import { useState, useEffect } from "react";
import { getPosts } from "../services/getPosts";

export const useFetchPosts = (url, id) => {
  const [isLoadingPosts, setIsLoadingPosts] = useState(true);
  const [errorLoadingPosts, setErrorLoadingPosts] = useState(false);
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const posts = await getPosts(url, id);
      setPosts(posts);
    } catch (error) {
      setErrorLoadingPosts(error);
      console.log(error);
    } finally {
      setIsLoadingPosts(false);
    }
  };

  useEffect(() => {
    fetchPosts(url, id);
  }, [url]);
  return { isLoadingPosts, errorLoadingPosts, posts };
};
