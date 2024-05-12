import { client } from "@/sanity/lib/client";
import { Banner } from "@/utils/interface";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Image } from "@nextui-org/image";

async function getBannerImages() {
  const query = `*[_type == "banner" && isActive == true] {
    _id,
    title,
    "imageUrl": image.asset->url,
    url,
    isActive
  }`;
  return await client.fetch(query);
}

const BannerImage = async () => {
  const banners: Banner[] = await getBannerImages();
  console.log(banners);

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
