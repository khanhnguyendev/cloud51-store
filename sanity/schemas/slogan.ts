import { Rule } from "sanity";

export const slogan = {
  name: "slogan",
  title: "Slogan Image (970px x 250px)",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Slogan Title",
      type: "string",
    },
    {
      name: "image",
      title: "Slogan Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule: Rule) =>
        Rule.required().error("Slogan Image is required"),
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
