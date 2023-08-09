"use client";
import React from "react";
import Link from "next/link";

const Button = ({
  link,
  onClick,
  children,
}: {
  link?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) => {
  const classes =
    "bg-primary px-4 py-1.5 text-white capitalize rounded-lg outline-none cursor-pointer border-2 border-primary shadow-md hover:bg-white hover:text-primary duration-500 transition-all inline-block";

  if (link)
    return (
      <Link className={classes} href={link} target="_blank">
        {children}
      </Link>
    );

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
