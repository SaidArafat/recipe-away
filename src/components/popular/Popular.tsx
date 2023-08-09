"use client";
import React from "react";
import Container from "../ui/layout/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Recipe } from "@/types";
import Button from "../ui/button/Button";
import Card from "./Card";

const Popular = ({ recipes }: { recipes: Recipe[] }) => {
  return (
    <Container className="bg-gray">
      <header className="flex flex-col items-start space-y-10 md:flex-row md:space-y-0 md:items-center md:space-x-10 mb-10">
        <h2 className="font-semibold capitalize text-2xl md:text-3xl lg:text-4xl w-full">
          Popular Food Recipes highly sought after by people
        </h2>
        <p className="w-full">
          These are some food blog recipes that people often see and make too
          because they are very healthy the recipes are also very easy to
          understand.
        </p>
      </header>
      <div>
        <Swiper
          grabCursor
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            // 768: {
            //   slidesPerView: 2,
            // },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {recipes.map((recipe) => (
            <SwiperSlide key={recipe.recipe_id}>
              <Card recipe={recipe} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default Popular;
