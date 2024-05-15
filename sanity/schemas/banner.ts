import { Rule } from "sanity";

export const banner = {
  name: "banner",
  title: "Banner Image",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Banner Title",
      type: "string",
    },
    {
      name: "image",
      title: "Banner Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule: Rule) =>
        Rule.required().error("Banner Image is required"),
    },
    {
      name: "url",
      title: "URL",
      type: "string",
      validation: (Rule: Rule) => Rule.uri().error("Invalid URL"),
    },
    {
      name: "isActive",
      title: "Is Active",
      type: "boolean",
      defaultValue: false,
    },
  ],
};
