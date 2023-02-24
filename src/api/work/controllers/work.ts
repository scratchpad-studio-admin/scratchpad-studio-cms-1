/**
 * work controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::work.work",
  ({ strapi }) => ({
    async findAll(ctx) {
      const filters = {
        publishedAt: {
          $ne: null,
        },
        ...ctx.query.filters,
      };
      const query = {
        populate: {
          work_list: {
            fields: ["row", "column"],
            populate: {
              project: {
                fields: ["name", "slug"],
                populate: {
                  cover_image: {
                    fields: ["url"],
                  },
                },
              },
            },
          },
        },
        filters: filters,
      };
      const entry = await strapi.entityService.findMany(
        "api::work.work",
        query
      );
      return entry;
    },
  })
);
