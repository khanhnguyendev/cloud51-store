import { Rule } from "sanity";

export const event = {
  name: "event",
  title: "Event Image (Square)",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Event Title",
      type: "string",
    },
    {
      name: "image",
      title: "Event Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule: Rule) =>
        Rule.required().error("Event Image is required"),
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
