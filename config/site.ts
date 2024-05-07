export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Cloud51 Store",
  description:
    "Trả trước 49% không cần góp qua bank | Chỉ có tại Cloud51 Store",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "iPhone",
      href: "/iphone",
    },
    {
      label: "Macbook",
      href: "/macbook",
    },
    {
      label: "iPad",
      href: "/ipad",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
