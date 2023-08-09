"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchModal from "@/components/search/SearchModal";

// interface Props {
//   logo: React.ReactNode | string;
//   list: { path: string; label: string }[];
// }

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  const links = [
    { path: "/", label: "home" },
    { path: "/blog", label: "blog" },
    { path: "/feedback", label: "feedback" },
  ];

  return (
    <nav
      className={`px-8 md:px-14 lg:px-16 py-3 md:flex md:items-center md:justify-between  font-medium fixed top-0 left-0 right-0 z-50 bg-white ${
        visible && "shadow-xl"
      } md:shadow-none`}
    >
      <div className="flex items-center justify-between">
        <Link href="/" className="uppercase font-bold text-black">
          <span className="bg-primary text-white px-1.5 py-0.5 rounded-full mr-1">
            R
          </span>
          away
        </Link>
        <button
          className="w-8 cursor-pointer md:hidden"
          onClick={() => setVisible(!visible)}
        >
          {visible ? (
            <img
              src="/assets/x-mark.svg"
              alt="burger menu"
              className="w-full h-full"
            />
          ) : (
            <img
              src="/assets/menu.svg"
              alt="x-mark"
              className="w-full h-full"
            />
          )}
        </button>
      </div>
      <ul
        className={`flex flex-col items-center justify-center space-y-2 md:flex-row md:space-y-0 md:justify-end md:space-x-14 lg:space-x-16 xl:space-x-20 duration-500 transition-all ${
          !visible && "max-h-0"
        } md:max-h-full overflow-hidden `}
      >
        {links.map(({ path, label }, index) => (
          <li
            key={index}
            className={`capitalize hover:text-primary duration-500 transition-all ${
              path === pathname && "text-primary"
            }`}
          >
            <Link href={path}>{label}</Link>
          </li>
        ))}
        <li>
          <SearchModal />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
