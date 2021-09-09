export const APIRoutes = {
  route: "https://jsonplaceholder.typicode.com/",
  getPosts: function () {
    return this.route + "posts";
  },
  getPost: function (id) {
    return this.route + "posts/" + id;
  },
  getComments: function () {
    return this.route + "comments";
  },
  getCommentsForSpecificPost: function (id) {
    return this.route + "posts/" + id + "/comments";
  },
};
