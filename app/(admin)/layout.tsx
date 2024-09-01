import "@/styles/globals.css";
import { Analytics } from '@vercel/analytics/react';

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
      <Analytics />
    </html>
  );
}
