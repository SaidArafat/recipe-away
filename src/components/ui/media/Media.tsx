import React from "react";

const Media = ({
  image,
  title,
  address,
}: {
  image: string;
  title: string;
  address: string;
}) => {
  return (
    <div className="flex items-center space-x-3 shadow-lg bg-white py-2 px-3 rounded-lg">
      <img
        className="w-14 h-14 object-cover rounded-full"
        src={image}
        alt={title}
      />
      <div>
        <h3 className="font-medium capitalize">{title}</h3>
        <p>{address}</p>
      </div>
    </div>
  );
};

export default Media;
