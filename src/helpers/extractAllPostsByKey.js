export const extractAllPostsByKey = (data) => {
  let sortedPostsByKey = data.reduce((userSorted, post) => {
    if (!userSorted[post.userId]) {
      userSorted[post.userId] = [];
    }

    userSorted[post.userId].push(post);

    return userSorted;
  }, {});
  let postsArray = [];
  for (const userID of Object.keys(sortedPostsByKey)) {
    sortedPostsByKey[userID].forEach((post) => {
      postsArray.push(post);
    });
  }
  return postsArray;
};
