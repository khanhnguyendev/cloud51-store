import NoProduct from "./NoProduct";
import ProductCard from "./ProductCard";
import { Product } from "@/utils/interface";

type Props = {
  products: Product[];
};

export default function IPad({ products }: Props) {
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
