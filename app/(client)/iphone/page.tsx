import { title } from "@/components/primitives";
import { client } from "@/sanity/lib/client";
import { Product } from "@/utils/interface";
import ProductCard from "@/components/ProductCard";

async function getProducts() {
  const query = `*[_type == "product"] {
    _id,
    title,
    slug,
    serial,
    price,
    description,
    "imageUrl": image.asset->url,
    tag[]->{
      _id, 
      name, 
      slug
    },
    vendor[]->{
      _id, 
      name, 
      slug
    }
  }`;
  return await client.fetch(query);
}

export default async function IphonePage() {
  const products: Product[] = await getProducts();

  return (
    <>
      <div className="mb-5">
        <h1 className={title()}>Iphone</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
        <ProductCard products={products} />
      </div>
    </>
  );
}
