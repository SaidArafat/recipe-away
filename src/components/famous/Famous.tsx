import React from "react";
import Container from "../ui/layout/Container";
import axios from "axios";
import { Recipe } from "@/types";
import Link from "next/link";

const getData = async () => {
  try {
    const { data } = await axios.get(
      "https://forkify-api.herokuapp.com/api/search?q=arepas"
    );
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const Famous = async () => {
  const { recipes } = await getData();

  return (
    <Container className="bg-gray">
      <header className="text-center flex flex-col space-y-4 pt-8 pb-16">
        <h2 className="font-semibold capitalize text-2xl md:text-3xl lg:text-4xl">
          Our Famous Food Recipes
        </h2>
        <p>
          These are some collections of very famous food recipes and also many
          who follow this recipe.
        </p>
      </header>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-10 pb-8">
        {recipes.map((recipe: Recipe, index: number) => (
          <Link
            key={recipe.recipe_id}
            className="flex justify-center"
            href={`/recipes/${recipe.recipe_id}`}
            target="_blank"
          >
            <div
              className={`w-24 h-24 rounded-full overflow-hidden ring-4
              ring-white drop-shadow-2xl
              ${(index + 1) % 2 == 0 && "-translate-y-5 w-20 h-20"}`}
            >
              <img
                src={recipe.image_url}
                alt={recipe.title}
                className="w-full h-full object-cover"
              />
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default Famous;
