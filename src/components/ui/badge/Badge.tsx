import React from "react";

const Badge = ({
  title,
  type,
  rate,
}: {
  title: string;
  type: string;
  rate: number;
}) => {
  const Star = () => <i className="fa-solid fa-star text-sm me-2"></i>;

  const stars = [];
  for (let i = 0; i < rate; i++) {
    stars.push(<Star key={i} />);
  }

  return (
    <div className="flex flex-col items-center justify-center text-center shadow-lg rounded-lg p-4 space-y-2 bg-white">
      <div className="border-b border-gray pb-2">
        <h4 className="capitalize font-medium mb-0">{title}</h4>
        <p>{type}</p>
      </div>
      <div className="text-[#FFA542]">{stars}</div>
    </div>
  );
};

export default Badge;
