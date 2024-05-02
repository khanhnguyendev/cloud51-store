import { defineType } from "sanity";

export const vendor = defineType({
  name: "vendor",
  title: "Vendor",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Vendor Name",
      type: "string",
      validation: (Rule) => Rule.required().error("Vendor Name is required"),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
      validation: (Rule) => Rule.required().error("Slug is required"),
    },
  ],
});
