import { title, subtitle } from "@/components/primitives";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import Image from "next/image";

export default function Home() {
  const categories = [
    {
      name: "Iphone",
      image: "/assets/images/iphone-thumbnail.png",
      link: "/iphone",
    },
    {
      name: "Macbook",
      image: "/assets/images/macbook-thumbnail.png",
      link: "/macbook",
    },
    {
      name: "Ipad",
      image: "/assets/images/ipad-thumbnail.png",
      link: "/ipad",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title({ color: "violet" })}>Cloud51 Store&nbsp;</h1>
        <br />
        <h1 className={title()}>Trả trước 49% không cần góp qua bank</h1>
      </div>
      <div>
        <h2 className={subtitle({ class: "mt-4" })}>
          📢 Có gói bảo hành 1 năm, an tâm sử dụng
        </h2>
        <h2 className={subtitle({ class: "mt-4" })}>
          🧑‍🎓 Tặng Voucher 300k cho học sinh, sinh viên
        </h2>
        <h2 className={subtitle({ class: "mt-4" })}>
          ♻️ Chính sách đổi trả bù trừ hợp lý để Update.
        </h2>
      </div>

      <div className="flex flex-col mt-10 md:flex-row gap-3">
        {categories.map((category) => (
          <a key={category.link} href={category.link}>
            <Card className="py-4 w-[200px] h-[200px]">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">{category.name}</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt={category.name}
                  className="object-cover rounded-xl"
                  src={category.image}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </CardBody>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}
