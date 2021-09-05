export const searchPosts = (data, term) => {
  const filteredData = data.filter(
    (submission) =>
      submission.userId.toString().includes(term.toLowerCase().trim()) ||
      submission.title.includes(term.toLowerCase().trim()) ||
      submission.body.includes(term.toLowerCase().trim())
  );
  return filteredData;
};
