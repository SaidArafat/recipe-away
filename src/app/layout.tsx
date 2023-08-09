import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.css";
import "../css/globals.css";
import Navbar from "@/components/ui/layout/Navbar";
import Footer from "@/components/ui/layout/Footer";

export const metadata: Metadata = {
  title: "Recipe Away",
  description: "food recipes website, find all available recipes on time.",
  applicationName: "Recipe Away",
  keywords: "food, recipe, nextjs, react",
};

const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body>
        <Navbar />
        <main className="selection:bg-primary selection:text-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
