import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.css";
import "../css/globals.css";

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
        <main className=" bg-primary">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
