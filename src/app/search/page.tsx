import React from "react";
import Container from "@/components/ui/layout/Container";
import axios from "axios";
import SearchRecipes from "@/components/search/SearchRecipes";

const getData = async (search: string) => {
  try {
    const { data } = await axios.get(
      "https://forkify-api.herokuapp.com/api/search?q=" + search
    );
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const SearchPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const { recipes } = await getData(searchParams.q);

  return <SearchRecipes recipes={recipes} />;
};

export default SearchPage;
