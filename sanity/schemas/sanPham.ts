import { Rule } from "sanity";

export const sanPham = {
  name: "sanPham",
  title: "SanPham",
  type: "document",

  fields: [
    {
      name: "title",
      title: "title",
      type: "string",
      validation: (Rule: Rule) => Rule.required().error("Title is required"),
    },
    {
      name: "priority",
      title: "Độ ưu tiên (Nhỏ hiển thị cuối)",
      type: "string",
      validation: (Rule: Rule) => Rule.required().error("Priority is required"),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: Rule) => Rule.required().error("Slug is required"),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule: Rule) => Rule.required().error("Image is required"),
    },
    {
      name: "detail",
      title: "Detail",
      type: "text",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule: Rule) => Rule.required().error("Price is required"),
    },
    {
      name: "tag",
      title: "Tag (iPhone12, iPhone11, ...)",
      type: "array",
      of: [{ type: "reference", to: [{ type: "tag" }] }],
      validation: (Rule: Rule) => Rule.required().error("Tag are required"),
    },
  ],
};
