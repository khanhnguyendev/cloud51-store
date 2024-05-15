import ProductComponent from "@/components/ProductComponent";
import SloganImage from "@/components/SloganImage";
import {
  getLatestEventImage,
  getProducts,
  getSloganImages,
} from "@/utils/fetcher";

async function fetchData() {
  const [products, slogans, event] = await Promise.all([
    getProducts(),
    getSloganImages(),
    getLatestEventImage(),
  ]);
  return { products, slogans, event };
}

export default async function Home() {
  const { products, slogans, event } = await fetchData();

  return (
    <section className="flex flex-col items-center justify-center py-3">
      <div className="inline-block max-w-lg text-center justify-center">
        <SloganImage slogans={slogans} />
      </div>

      <div className="flex flex-col mt-10 gap-3 lg:w-4/5">
        <ProductComponent products={products} event={event} />
      </div>
    </section>
  );
}
