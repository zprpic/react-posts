import { useState, useEffect } from "react";
import { extractAllPostsByKey } from "../helpers/extractAllPostsByKey";

export const useFetchPosts = (url) => {
  const [isLoadingPosts, setIsLoadingPosts] = useState(true);
  const [errorLoadingPosts, setErrorLoadingPosts] = useState(false);
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await fetch(`${url}/posts`);
      const data = await response.json();
      const posts = await extractAllPostsByKey(data);
      setPosts(posts);
    } catch (e) {
      setErrorLoadingPosts(e);
      console.log(e);
    } finally {
      setIsLoadingPosts(false);
    }
  };

  useEffect(() => {
    getPosts(url);
  }, [url]);
  return { isLoadingPosts, errorLoadingPosts, posts };
};
