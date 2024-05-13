import ProductTabs from "@/components/ProductTabs";
import { Product } from "@/utils/interface";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

interface Props {
  products: Product[];
}

const ProductComponent = ({ products }: Props) => {
  return (
    <>
      <Tabs defaultValue="loan">
        <TabsList className="grid w-full grid-cols-2 bg-gray-200 dark:bg-gray-800">
          <TabsTrigger value="loan">Vay</TabsTrigger>
          <TabsTrigger value="installment">Trả góp</TabsTrigger>
        </TabsList>
        <TabsContent value="loan">
          <Card>
            <CardContent className="space-y-2">
              <ProductTabs products={products} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="installment">
          <Card>
            <CardContent className="space-y-2">
              <ProductTabs products={products} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default ProductComponent;
