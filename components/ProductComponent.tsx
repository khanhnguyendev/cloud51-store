import { Event, Product } from "@/utils/interface";

import ProductTabs from "@/components/ProductTabs";

interface Props {
  products: Product[];
  event: Event;
}

const ProductComponent = ({ products, event }: Props) => {
  return (
    <>
      <ProductTabs products={products} />
    </>
  );
};

export default ProductComponent;
