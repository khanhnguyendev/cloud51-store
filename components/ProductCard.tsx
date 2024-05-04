"use client";

import { Product } from "@/utils/interface";
import React from "react";

import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
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
          <Card className="h-full grid">
            <CardHeader className="flex flex-1 flex-col h-full">
              <h4 className="font-bold text-large">{product.title}</h4>
            </CardHeader>
            <CardBody className="h-full flex flex-col gap-5 justify-start items-center">
              <Image
                alt={product.title}
                className="object-cover rounded-xl"
                src={product.imageUrl}
                width={200}
                height={200}
              />
            </CardBody>
            <CardFooter className="flex flex-1 flex-col h-full">
              <span className="flex text-lg font-bold text-red-500">
                <TagPrice /> {product.price.toLocaleString()} VND
              </span>
              <Button color="primary" onPress={onOpen}>
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
                      {product.description ||
                        "Vui lòng liên hệ để nhận ưu đãi!!"}
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="primary" onPress={handleButtonClick}>
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
