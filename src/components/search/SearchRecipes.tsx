import React from "react";
import Container from "../ui/layout/Container";
import { Recipe } from "@/types";
import Card from "../popular/Card";

const SearchRecipes = ({ recipes }: { recipes: Recipe[] }) => {
  return (
    <Container className="bg-gray">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {recipes.map((recipe) => (
          <Card recipe={recipe} key={recipe.recipe_id} />
        ))}
      </div>
    </Container>
  );
};

export default SearchRecipes;
