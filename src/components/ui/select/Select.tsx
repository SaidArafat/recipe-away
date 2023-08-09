"use client";
import React from "react";
import { options } from "../../../../data";

const Select = ({
  onSelectCategory,
}: {
  onSelectCategory: (item: string) => void;
}) => {
  return (
    <select
      className="block w-full outline-none px-5 appearance-none border-none"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value="">Find your favorite recipes</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
