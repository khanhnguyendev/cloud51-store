import { Product } from "@/utils/interface";
import ProductCard from "@/components/ProductCard";
import NoProduct from "./NoProduct";

type Props = {
  products: Product[];
};

export default function IPhone({ products }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full">
      {products.length === 0 ? (
        <NoProduct />
      ) : (
        <ProductCard products={products} />
      )}
    </div>
  );
}
