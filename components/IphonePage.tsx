import { Product } from "@/utils/interface";
import ProductCard from "@/components/ProductCard";

type Props = {
  products: Product[];
};

export default function IphonePage({ products }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full">
      <ProductCard products={products} />
    </div>
  );
}
