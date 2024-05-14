import { Banner, Product } from "@/utils/interface";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BannerImage from "@/components/BannerImage";
import ProductTabs from "@/components/ProductTabs";

interface Props {
  products: Product[];
  banners: Banner[];
}

const ProductComponent = ({ products, banners }: Props) => {
  return (
    <>
      <Tabs defaultValue="loan" className="w-full">
        <TabsList className="flex justify-center bg-gray-200 dark:bg-gray-800 rounded-2xl">
          <TabsTrigger
            value="loan"
            className="w-1/2 rounded-2xl text-center font-medium text-gray-950 dark:text-gray-200 transition-colors duration-300 hover:text-pink-500 dark:hover:text-pink-400"
          >
            Vay
          </TabsTrigger>
          <TabsTrigger
            value="installment"
            className="w-1/2 rounded-2xl text-center font-medium text-gray-950 dark:text-gray-200 transition-colors duration-300 hover:text-pink-500 dark:hover:text-pink-400"
          >
            Trả góp
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="loan"
          className="p-5 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-lg"
        >
          <BannerImage banners={banners} />
        </TabsContent>
        <TabsContent
          value="installment"
          className="p-5 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-lg"
        >
          <ProductTabs products={products} />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default ProductComponent;
