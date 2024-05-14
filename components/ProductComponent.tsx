import ProductTabs from "@/components/ProductTabs";
import { Banner, Product } from "@/utils/interface";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import BannerImage from "./BannerImage";

interface Props {
  products: Product[];
  banners: Banner[];
}

const ProductComponent = ({ products, banners }: Props) => {
  return (
    <>
      <Tabs defaultValue="loan">
        <TabsList className="grid grid-cols-2 bg-gray-200 dark:bg-gray-800">
          <TabsTrigger value="loan">Vay</TabsTrigger>
          <TabsTrigger value="installment">Trả góp</TabsTrigger>
        </TabsList>
        <TabsContent value="loan">
          <BannerImage banners={banners} />
        </TabsContent>
        <TabsContent value="installment">
          <ProductTabs products={products} />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default ProductComponent;
