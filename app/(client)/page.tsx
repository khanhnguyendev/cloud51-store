import BannerImage from "@/components/BannerImage";
import ProductTabs from "@/components/ProductTabs";
import SloganImage from "@/components/SloganImage";
import { client } from "@/sanity/lib/client";
import { Product } from "@/utils/interface";

async function getProducts() {
  const query = `*[_type == "product"] {
    _id,
    title,
    slug,
    serial,
    price,
    detail,
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

export default async function Home() {
  const products: Product[] = await getProducts();

  return (
    <section className="flex flex-col items-center justify-center py-3">
      <div className="inline-block max-w-lg text-center justify-center">
        <SloganImage />
        <BannerImage />
      </div>

      <div className="flex flex-col mt-10 gap-3 w-full">
        <ProductTabs products={products} />
      </div>
    </section>
  );
}
