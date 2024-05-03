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

  return (
    <>
      {products.map((product) => (
        <div key={product._id}>
          <Card className="h-full grid">
            <CardHeader className="flex flex-1 flex-col h-full">
              <h4 className="font-bold text-large">
                {product.title}
                {product.title}
                {product.title}
              </h4>
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
                    Modal Title
                  </ModalHeader>
                  <ModalBody>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam pulvinar risus non risus hendrerit venenatis.
                      Pellentesque sit amet hendrerit risus, sed porttitor quam.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam pulvinar risus non risus hendrerit venenatis.
                      Pellentesque sit amet hendrerit risus, sed porttitor quam.
                    </p>
                    <p>
                      Magna exercitation reprehenderit magna aute tempor
                      cupidatat consequat elit dolor adipisicing. Mollit dolor
                      eiusmod sunt ex incididunt cillum quis. Velit duis sit
                      officia eiusmod Lorem aliqua enim laboris do dolor
                      eiusmod. Et mollit incididunt nisi consectetur esse
                      laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
                      deserunt nostrud ad veniam.
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="primary" onPress={onClose}>
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
