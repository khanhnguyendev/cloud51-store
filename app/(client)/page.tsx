import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
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

      <div className="flex gap-3">
        <Link
          isExternal
          href={siteConfig.navItems[1].href}
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
        >
          Iphone
        </Link>
        <Link
          isExternal
          href={siteConfig.navItems[2].href}
          className={buttonStyles({
            color: "secondary",
            radius: "full",
            variant: "shadow",
          })}
        >
          Macbook
        </Link>
      </div>

      {/* <div className="mt-8">
        <Snippet hideSymbol hideCopyButton variant="flat">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div> */}
    </section>
  );
}
