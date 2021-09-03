export function joinPostsAndComments(posts, comments) {
  const postsAndComments = posts.map((post) => {
    post.comments = comments[post.id];
    return post;
  });
  return postsAndComments;
}
