import { Banner } from "@/utils/interface";
import { Image } from "@nextui-org/image";

interface Props {
  banners: Banner[];
}

const BannerImage = ({ banners }: Props) => {
  return (
    <>
      <div className="mt-10 lg:p-10">
        {banners.map((banner) => (
          <Image
            key={banner._id}
            src={banner.url}
            alt={banner.title}
            className="w-full h-auto"
          />
        ))}
      </div>
    </>
  );
};

export default BannerImage;
