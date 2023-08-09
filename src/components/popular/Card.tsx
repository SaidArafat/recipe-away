import React from "react";
import { Recipe } from "@/types";
import Button from "../ui/button/Button";

const Card = ({ recipe }: { recipe: Recipe }) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white h-[30rem] flex flex-col items-center justify-between pb-4 text-center relative">
      <img
        src={recipe.image_url}
        alt={recipe.title}
        className="h-80 object-cover"
      />
      <h3 className="font-medium capitalize text-base">{recipe.title}</h3>
      <h4 className="font-medium capitalize opacity-60 text-sm">
        By {recipe.publisher}
      </h4>
      <Button link={`/recipes/${recipe.recipe_id}`}>view details</Button>
    </div>
  );
};

export default Card;
