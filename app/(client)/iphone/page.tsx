import { title } from "@/components/primitives";
import { client } from "@/sanity/lib/client";
import { Product } from "@/utils/interface";

import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button, ButtonGroup } from "@nextui-org/button";
import Image from "next/image";

async function getProducts() {
  const query = `*[_type == "product"] {
    _id,
    title,
    slug,
    serial,
    price,
    "imageUrl": image.asset->url,
    tag[]->{
      _id, 
      name, 
      slug
    },
    vendor[]->{
      _id, 
      name, 
      slug
    }
  }`;
  return await client.fetch(query);
}

export default async function IphonePage() {
  const products: Product[] = await getProducts();
  console.log(products);

  return (
    <>
      <div className="mb-5">
        <h1 className={title()}>Iphone</h1>
      </div>

      <div className="gap-5 flex-wrap">
        {products.map((product) => (
          <div key={product._id} className="w-[333px] h-[500px] mb-4">
            <Card className="h-full">
              <CardBody className="h-full flex flex-col justify-between">
                <div className="relative w-full h-[300px]">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={product.imageUrl}
                    width={270} // Adjust width according to your design
                    height={270} // Adjust height according to your design
                  />
                </div>
                <div>
                  <p className="text-tiny uppercase font-bold">
                    {product.status}
                  </p>
                  <small className="text-default-500">{product.price}</small>
                  <h4 className="font-bold text-large truncate">
                    {product.title}
                  </h4>
                </div>
                <Button color="primary">Chi Tiết</Button>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}
