"use client";

import React, { useState } from "react";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Product } from "@/utils/interface";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProductCardProps {
  products: Product[];
}

const ProductCard = ({ products }: ProductCardProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    onOpen();
  };

  const handleButtonClick = () => {
    window.open("https://zalo.me/0888393339", "_blank");
  };

  return (
    <>
      {products.map((product) => (
        <div key={product._id}>
          <Card
            className="max-w-sm mx-auto shadow-lg rounded-lg overflow-hidden transition-transform transform-gpu duration-300 hover:scale-105 hover:shadow-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            onClick={() => handleProductClick(product)}
          >
            <CardHeader className="p-3 flex justify-center items-center">
              <CardTitle className="h-[50px] lg:h-[75px] overflow-hidden text-sm lg:text-base font-semibold text-center text-gray-900 dark:text-gray-100">
                {product.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center items-center max-h-[100px]">
              <Image
                alt={product.title}
                className="object-cover rounded-xl transform transition-transform duration-500 hover:scale-110"
                src={product.imageUrl}
                width={100}
                height={100}
              />
            </CardContent>
            <CardFooter className="flex flex-col items-center p-4">
              <div className="flex items-center text-xs 2xl:text-base font-bold text-red-500 dark:text-red-400 mb-2">
                <span className="ml-1">{product.price.toLocaleString()}</span>
                <span className="ml-1">VND</span>
              </div>
              <Button
                color="danger"
                onPress={() => handleProductClick(product)}
                className="text-white text-xs bg-red-500 dark:bg-red-600 dark:hover:bg-red-500"
              >
                Chi Tiết
              </Button>
            </CardFooter>
          </Card>
        </div>
      ))}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {selectedProduct && (
            <>
              <ModalHeader>
                <h4>{selectedProduct.title}</h4>
              </ModalHeader>
              <ModalBody>
                <p>
                  {selectedProduct.detail ||
                    "Vui lòng liên hệ để nhận ưu đãi!!"}
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onClick={onClose}>
                  Close
                </Button>
                <Button color="danger" onClick={handleButtonClick}>
                  Liên hệ
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProductCard;
