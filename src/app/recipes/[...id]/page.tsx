import React from "react";
import Container from "@/components/ui/layout/Container";
import axios from "axios";

const getItem = async (id: string) => {
  try {
    const { data } = await axios.get(
      "https://forkify-api.herokuapp.com/api/get?rId=" + id
    );

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const Details = async ({ params }: { params: { id: string } }) => {
  const { recipe } = await getItem(params.id);

  return (
    <Container className="bg-gray">
      <div className="flex flex-col-reverse space-y-12 items-center md:flex-row md:space-y-0 md:space-x-10">
        <div className="w-full flex flex-col space-y-4 mt-5 md:mt-0">
          <h2 className="font-semibold capitalize text-2xl md:text-3xl lg:text-4xl">
            {recipe.title}
          </h2>
          <ul className="flex flex-col space-y-2">
            {recipe.ingredients.map((ingredient: string, index: number) => (
              <li
                key={index}
                className="first-letter:capitalize after:content-['.']"
              >
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full">
          <img
            src={recipe.image_url}
            alt={recipe.title}
            className="h-[30rem] object-cover"
          />
        </div>
      </div>
    </Container>
  );
};

export default Details;
