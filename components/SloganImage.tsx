import { client } from "@/sanity/lib/client";
import { Slogan } from "@/utils/interface";
import { Image } from "@nextui-org/image";

async function getSloganImages() {
  const query = `*[_type == "slogan" && isActive == true] {
    _id,
    title,
    "imageUrl": image.asset->url,
    url,
    isActive
  }`;
  return await client.fetch(query);
}

const SloganImage = async () => {
  const slogans: Slogan[] = await getSloganImages();
  console.log(slogans);

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
