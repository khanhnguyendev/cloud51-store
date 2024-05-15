import { type SchemaTypeDefinition } from "sanity";
import { product } from "./schemas/product";
import { tag } from "./schemas/tag";
import { vendor } from "./schemas/vendor";
import { event } from "./schemas/event";
import { banner } from "./schemas/banner";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, tag, vendor, banner, event],
};
