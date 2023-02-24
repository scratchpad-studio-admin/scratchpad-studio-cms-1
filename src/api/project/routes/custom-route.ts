module.exports = {
  routes: [
    {
      method: "GET",
      path: "/project/list",
      handler: "project.findAll",
      config: {
        policies: [],
      },
    },
    {
      method: "GET",
      path: "/project/detail",
      handler: "project.findProject",
      config: {
        policies: [],
      },
    },
  ],
};
