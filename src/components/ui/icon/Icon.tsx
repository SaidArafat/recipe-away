import React from "react";

const Icon = ({
  primary,
  children,
}: {
  primary?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <span
      className={`p-2 text-2xl w-10 h-10 rounded-full flex items-center justify-center shadow-lg cursor-pointer ${
        primary && "bg-primary text-white"
      }`}
    >
      {children}
    </span>
  );
};

export default Icon;
