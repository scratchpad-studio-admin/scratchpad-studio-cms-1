module.exports = {
  routes: [
    {
      method: "GET",
      path: "/work/list",
      handler: "work.findAll",
      config: {
        policies: [],
      },
    },
  ],
};
