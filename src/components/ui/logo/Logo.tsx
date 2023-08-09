import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="uppercase font-bold text-black">
      <span className="bg-primary text-white px-1.5 py-0.5 rounded-full mr-1">
        R
      </span>
      away
    </Link>
  );
};

export default Logo;
