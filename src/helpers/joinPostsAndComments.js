export function joinPostsAndComments(posts, comments) {
  if (!posts) {
    return [];
  }
  const postsAndComments = posts.map((post) => {
    post.comments = comments[post.id];
    return post;
  });
  return postsAndComments;
}
