import { client } from "@/sanity/lib/client";
import { Product } from "@/utils/interface";

import { title } from "@/components/primitives";
import ProductCard from "@/components/ProductCard";
import { Chip } from "@nextui-org/react";

async function getProducts() {
  const query = `*[_type == "sanPham"] {
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

  const filterProducts = (type: string) => {
    return products.filter((product) =>
      product.tag.some((tag) => tag.slug.current === type)
    );
  };

  return (
    <>
      <div className="mb-10">
        <h1 className={title()}>iPhone</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
        {products.length === 0 ? (
          <Chip
            variant="shadow"
            classNames={{
              base: "bg-gradient-to-br from-indigo-500 to-red-500 border-small border-white/50 shadow-red-500/30",
              content: "drop-shadow shadow-black text-white",
            }}
          >
            Chưa có sản phẩm...
          </Chip>
        ) : (
          <ProductCard products={filterProducts("iphone")} />
        )}
      </div>
    </>
  );
}
