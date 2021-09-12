export const APIRoutes = {
  route: "https://jsonplaceholder.typicode.com/",
  getPosts() {
    return this.route + "posts";
  },
  getPost(id) {
    return this.route + "posts/" + id;
  },
  getComments() {
    return this.route + "comments";
  },
  getCommentsForSpecificPost(id) {
    return this.route + "posts/" + id + "/comments";
  },
};
