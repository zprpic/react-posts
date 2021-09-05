export const searchPosts = (data, term) => {
  const filteredData = data.filter((submission) => {
    if (
      submission.id.toString().includes(term.toLowerCase().trim()) ||
      submission.title.includes(term.toLowerCase().trim()) ||
      submission.body.includes(term.toLowerCase().trim())
    ) {
      return submission;
    } else {
      return null;
    }
  });
  return filteredData;
};
