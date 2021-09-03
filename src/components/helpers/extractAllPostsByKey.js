/* export const extractPostByPost = (data) => {
  for (const userId of Object.keys(data)) {
    data[userId].forEach((post) => {
      console.log(post);
    });
  }
}; */

//UNFINISHED
//function name needs a change as well...

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
