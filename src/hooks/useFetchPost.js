import { useState, useEffect } from "react";

export const useFetchPost = (url, id) => {
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState("");

  const getPost = async () => {
    const response = await fetch(`${url}/posts/${id}`);
    const post = await response.json();
    setPost(post);
    setIsLoading(false);
  };

  useEffect(() => {
    getPost(url, id);
  }, [url]);
  return { isLoading, post };
};
