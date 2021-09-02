import { useState, useEffect } from "react";

export const useFetchPosts = (url) => {
  const [isLoadingPosts, setIsLoadingPosts] = useState(true);
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await fetch(`${url}/posts`);
    const data = await response.json();
    const posts = data.reduce((userSorted, post) => {
      if (!userSorted[post.userId]) {
        userSorted[post.userId] = [];
      }

      userSorted[post.userId].push(post);

      return userSorted;
    }, {});
    setPosts(posts);
    setIsLoadingPosts(false);
  };

  useEffect(() => {
    getPosts(url);
  }, [url]);
  return { isLoadingPosts, posts };
};
