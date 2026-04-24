import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Poppins({ 
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: "VisionCraft - Premium Eyewear Collection",
  description: "Discover premium eyewear with style and clarity",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
