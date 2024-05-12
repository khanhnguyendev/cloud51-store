import { Slogan } from "@/utils/interface";
import { Image } from "@nextui-org/image";

interface Props {
  slogans: Slogan[];
}

const SloganImage = ({ slogans }: Props) => {
  return (
    <>
      {slogans.map((slogan) => (
        <div key={slogan._id} className="max-w-screen-lg w-full mx-auto mb-5">
          <Image
            src="https://res.cloudinary.com/cloud51-store/image/upload/v1715529333/slogan/970x250-starbucks-nitro.jpg_s66icx.webp"
            alt={slogan.title}
          />
        </div>
      ))}
    </>
  );
};

export default SloganImage;
