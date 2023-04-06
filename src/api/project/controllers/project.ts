/**
 * project controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::project.project",
  ({ strapi }) => ({
    async findAll(ctx) {
      const filters = {
        publishedAt: {
          $ne: null,
        },
        ...ctx.query.filters,
      };
      const query = {
        fields: "*",
        populate: ["cover_image"],
        filters: filters,
      };
      const entry = await strapi.entityService.findMany(
        "api::project.project",
        query
      );
      return entry;
    },
    async findProject(ctx) {
      const filters = {
        publishedAt: {
          $ne: null,
        },
        ...ctx.query.filters,
      };
      const { sort } = ctx.query;
      const query = {
        fields: "*",
        populate: {
          contents: {
            fields: "*",
            populate: {
              items: {
                fields: "*",
                populate: {
                  image: {
                    fields: "url",
                  },
                },
              },
            },
          },
          header_image: {
            fields: "url",
          },
          next_project: {
            fields: ["name", "slug"],
            populate: {
              cover_image: {
                fields: ["url"],
              },
            },
          },
        },
        sort: sort,
        filters: filters,
      };
      const entry = await strapi.entityService.findMany(
        "api::project.project",
        query
      );
      return entry[0];
    },
  })
);
