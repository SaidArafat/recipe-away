import React from "react";

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <section className={`px-8 md:px-14 lg:px-16 py-10 mt-10 ${className}`}>
      {children}
    </section>
  );
};

export default Container;
