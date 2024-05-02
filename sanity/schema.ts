import { type SchemaTypeDefinition } from "sanity";
import { product } from "./schemas/product";
import { tag } from "./schemas/tag";
import { vendor } from "./schemas/vendor";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, tag, vendor],
};
