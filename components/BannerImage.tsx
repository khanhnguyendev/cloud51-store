import { Banner } from "@/utils/interface";
import { Image } from "@nextui-org/image";

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Props {
  banners: Banner[];
}

const BannerImage = ({ banners }: Props) => {
  return (
    <>
      <Carousel className="w-4/5 lg:w-full mx-auto mb-5">
        <CarouselContent>
          {banners.map((banner) => (
            <div
              key={banner._id}
              className="max-w-screen-lg w-full mx-auto mb-5"
            >
              <Image src={banner.imageUrl} alt={banner.title} />
            </div>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default BannerImage;
