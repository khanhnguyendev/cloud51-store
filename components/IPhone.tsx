import { Product } from "@/utils/interface";
import ProductCard from "@/components/ProductCard";
import NoProduct from "@/components/NoProduct";

type Props = {
  products: Product[];
};

export default function IPhone({ products }: Props) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 w-full">
      {products.length === 0 ? (
        <NoProduct />
      ) : (
        <ProductCard products={products} />
      )}
    </div>
  );
}
