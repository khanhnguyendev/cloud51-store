import { Banner } from "@/utils/interface";
import { Image } from "@nextui-org/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Props {
  banners: Banner[];
}

const BannerImage = ({ banners }: Props) => {
  return (
    <Carousel className="max-w-screen-lg sm:w-4/5 mx-auto mb-5">
      <CarouselContent>
        {banners.map((banner) => (
          <CarouselItem key={banner._id}>
            <Image
              src={banner.url}
              alt={banner.title}
              className="w-full h-auto"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default BannerImage;
