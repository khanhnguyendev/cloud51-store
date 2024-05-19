import { type SchemaTypeDefinition } from "sanity";
import { tag } from "./schemas/tag";
import { event } from "./schemas/event";
import { banner } from "./schemas/banner";
import { sanPham } from "./schemas/sanPham";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [sanPham, tag, banner, event],
};
