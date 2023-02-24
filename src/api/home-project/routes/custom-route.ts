module.exports = {
  routes: [
    {
      method: "GET",
      path: "/home-project/list",
      handler: "home-project.findAll",
      config: {
        policies: [],
      },
    },
  ],
};
