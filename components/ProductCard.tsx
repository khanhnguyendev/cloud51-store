"use client";

import { Product } from "@/utils/interface";
import React from "react";

// import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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

import { TagPrice } from "@/components/icons";

interface ProductCardProps {
  products: Product[];
}

const ProductCard = ({ products }: ProductCardProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleButtonClick = () => {
    window.open("https://zalo.me/0888393339", "_blank");
  };

  return (
    <>
      {products.map((product) => (
        <div key={product._id}>
          <Card className="max-w-sm mx-auto shadow-lg rounded-lg overflow-hidden transition-transform transform-gpu duration-300 hover:scale-105 hover:shadow-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <CardHeader className="p-4 flex justify-center items-center">
              <CardTitle className="h-[75px] overflow-hidden text-sm lg:text-base font-semibold text-center text-gray-900 dark:text-gray-100">
                {product.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center items-center">
              <Image
                alt={product.title}
                className="object-cover rounded-xl transform transition-transform duration-500 hover:scale-110"
                src={product.imageUrl}
                width={100}
                height={100}
              />
            </CardContent>
            <CardFooter className="flex flex-col items-center p-4">
              <div className="flex items-center text-xs font-bold text-red-500 dark:text-red-400 mb-2">
                <TagPrice />
                <span className="ml-1">{product.price.toLocaleString()}</span>
                <span className="ml-1">VND</span>
              </div>
              <Button
                color="danger"
                onPress={onOpen}
                className="text-white text-xs bg-red-500 dark:bg-red-600 dark:hover:bg-red-500"
              >
                Chi Tiết
              </Button>
            </CardFooter>
          </Card>

          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    {product.title}
                  </ModalHeader>
                  <ModalBody>
                    <p>
                      {product.detail || "Vui lòng liên hệ để nhận ưu đãi!!"}
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="danger" onPress={handleButtonClick}>
                      Liên hệ
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
