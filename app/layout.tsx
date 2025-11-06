import type { Metadata } from "next";
import { Figtree} from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Small Stone Region",
  description: "Inversion of Pebble World. Welcome.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
