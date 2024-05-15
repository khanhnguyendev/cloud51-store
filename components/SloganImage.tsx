import { Slogan } from "@/utils/interface";
import { Image } from "@nextui-org/image";

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Props {
  slogans: Slogan[];
}

const SloganImage = ({ slogans }: Props) => {
  return (
    <>
      <Carousel className="w-4/5 lg:w-full mx-auto mb-5">
        <CarouselContent>
          {slogans.map((slogan) => (
            <div
              key={slogan._id}
              className="max-w-screen-lg w-full mx-auto mb-5"
            >
              <Image src={slogan.imageUrl} alt={slogan.title} />
            </div>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default SloganImage;
