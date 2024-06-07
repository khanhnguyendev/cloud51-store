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
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  return (
    <>
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "center",
        }}
        className="w-full"
      >
        <CarouselContent>
          {banners.map((banner) => (
            <CarouselItem key={banner._id}>
              <div className="max-w-screen-lg w-full mx-auto">
                <Image src={banner.imageUrl} alt={banner.title} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
};

export default BannerImage;
