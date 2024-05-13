import BannerImage from "@/components/BannerImage";
import ProductComponent from "@/components/ProductComponent";
import SloganImage from "@/components/SloganImage";
import { getBannerImages, getProducts, getSloganImages } from "@/utils/fetcher";

async function fetchData() {
  const [products, slogans, banners] = await Promise.all([
    getProducts(),
    getSloganImages(),
    getBannerImages(),
  ]);
  return { products, slogans, banners };
}

export default async function Home() {
  const { products, slogans, banners } = await fetchData();

  return (
    <section className="flex flex-col items-center justify-center py-3">
      <div className="inline-block max-w-lg text-center justify-center">
        <SloganImage slogans={slogans} />
        <BannerImage banners={banners} />
      </div>

      <div className="flex flex-col mt-10 gap-3 w-full">
        <ProductComponent products={products} />
      </div>
    </section>
  );
}
