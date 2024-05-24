import ProductComponent from "@/components/ProductComponent";
import BannerImage from "@/components/BannerImage";
import {
  fetchBannerImage,
  fetchLatestEvent,
  fetchProducts,
} from "@/utils/fetcher";

async function fetchData() {
  const [products, banners, event] = await Promise.all([
    fetchProducts(),
    fetchBannerImage(),
    fetchLatestEvent(),
  ]);

  return { products, banners, event };
}

export default async function Home() {
  const { products, banners, event } = await fetchData();

  return (
    <section className="flex flex-col items-center justify-center py-5">
      <div className="-mx-6 lg:mx-0 flex items-center text-center justify-center">
        <BannerImage banners={banners} />
      </div>

      <div className="flex flex-col mt-10 gap-3 lg:w-4/5 w-full">
        <ProductComponent products={products} event={event} />
      </div>
    </section>
  );
}
