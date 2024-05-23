import { Product } from "@/utils/interface";
import ProductCard from "@/components/ProductCard";
import NoProduct from "@/components/NoProduct";

type Props = {
  products: Product[];
  groupProducts?: boolean; // Optional flag to group products
};

// Function to sort and group products
const sortAndGroupProducts = (products: Product[]) => {
  // Group products by their integer priority
  const groupedProducts: { [key: string]: Product[] } = {};

  products.forEach((product) => {
    const intPriority = Math.floor(product.priority);
    if (!groupedProducts[intPriority]) {
      groupedProducts[intPriority] = [];
    }
    groupedProducts[intPriority].push(product);
  });

  // Sort each group by their decimal priority
  Object.keys(groupedProducts).forEach((key) => {
    groupedProducts[key].sort((a, b) => b.priority - a.priority);
  });

  return groupedProducts;
};

export default function IPhone({ products, groupProducts = false }: Props) {
  // Sort and group the products if grouping is enabled
  const groupedProducts = groupProducts
    ? sortAndGroupProducts(products)
    : { all: products.sort((a, b) => b.priority - a.priority) };

  // Get the sorted keys to ensure correct order, reversed to display higher priority first
  const sortedKeys = Object.keys(groupedProducts).sort(
    (a, b) => parseFloat(b) - parseFloat(a)
  );

  return (
    <div className="space-y-5 w-full">
      {products.length === 0 ? (
        <NoProduct />
      ) : (
        sortedKeys.map((key) => (
          <div
            key={key}
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5"
          >
            <ProductCard products={groupedProducts[key]} />
          </div>
        ))
      )}
    </div>
  );
}
