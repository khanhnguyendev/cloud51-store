import { type SchemaTypeDefinition } from "sanity";
import { product } from "./schemas/product";
import { tag } from "./schemas/tag";
import { vendor } from "./schemas/vendor";
import { slogan } from "./schemas/slogan";
import { event } from "./schemas/event";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, tag, vendor, slogan, event],
};
