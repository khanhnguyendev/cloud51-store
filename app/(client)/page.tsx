import Tabs from "@/components/Tabs";
import { title, subtitle } from "@/components/primitives";
import { client } from "@/sanity/lib/client";
import { Product } from "@/utils/interface";

async function getProducts() {
  const query = `*[_type == "product"] {
    _id,
    title,
    slug,
    serial,
    price,
    detail,
    "imageUrl": image.asset->url,
    tag[]->{
      _id, 
      name, 
      slug
    },
    vendor[]->{
      _id, 
      name, 
      slug
    }
  }`;
  return await client.fetch(query);
}

export default async function Home() {
  const products: Product[] = await getProducts();

  return (
    <section className="flex flex-col items-center justify-center py-3">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title({ color: "pink" })}>Cloud51 Store&nbsp;</h1>
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

      <div className="flex flex-col mt-10 gap-3 w-full">
        <Tabs products={products} />
      </div>
    </section>
  );
}
