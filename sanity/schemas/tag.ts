import { defineType } from "sanity";

export const tag = defineType({
  name: "tag",
  title: "Tag",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Tag Name",
      type: "string",
      validation: (Rule) => Rule.required().error("Tag Name is required"),
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
