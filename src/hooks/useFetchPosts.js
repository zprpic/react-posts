import { useState, useEffect } from "react";
import { extractAllPostsByKey } from "../helpers/extractAllPostsByKey";

export const useFetchPosts = (url) => {
  const [isLoadingPosts, setIsLoadingPosts] = useState(true);
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await fetch(`${url}/posts`);
    const data = await response.json();
    const posts = await extractAllPostsByKey(data);

    setPosts(posts);
    setIsLoadingPosts(false);
  };

  useEffect(() => {
    getPosts(url);
  }, [url]);
  return { isLoadingPosts, posts };
};
