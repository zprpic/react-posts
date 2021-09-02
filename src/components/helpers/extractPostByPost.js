export const extractPostByPost = (data) => {
  for (const userId of Object.keys(data)) {
    data[userId].forEach((post) => {
      console.log(post);
    });
  }
};

//UNFINISHED
//function name needs a change as well...
