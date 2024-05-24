"use client";

import React from "react";
import { Banner } from "@/utils/interface";
import { Image } from "@nextui-org/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Props {
  banners: Banner[];
}

const BannerImage = ({ banners }: Props) => {
  console.log(banners);
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <>
      <Carousel plugins={[plugin.current]} className="w-full">
        <CarouselContent>
          {banners.map((banner) => (
            <CarouselItem key={banner._id}>
              <div className="max-w-screen-lg w-full flex items-center justify-center">
                <Image
                  alt="Image"
                  height={225}
                  src={banner.imageUrl}
                  width={400}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
};

export default BannerImage;
