import "./globals.css";

export const metadata = {
  title: "Cloud51 CMS",
  description: "Cloud51 Store CMS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
