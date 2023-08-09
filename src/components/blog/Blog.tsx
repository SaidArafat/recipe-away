"use client";
import React from "react";
import Container from "../ui/layout/Container";
import Button from "../ui/button/Button";
import Badge from "../ui/badge/Badge";

const Blog = () => {
  return (
    <Container>
      <div className="flex flex-col items-start justify-center space-y-10 md:flex-row md:space-y-0 md:items-center md:space-x-20">
        <div className="flex flex-col items-start space-y-10 w-full">
          <h2 className="font-semibold capitalize text-2xl md:text-3xl lg:text-4xl">
            Variety of food and beverage recipes healthy food
          </h2>
          <p>
            Want to learn cook but confused to start from what? let&apos;s
            immediately register your account and look for the recipes.
          </p>
          <Button onClick={() => console.log("View Details")}>
            view details
          </Button>
        </div>
        <div className="w-full relative">
          <img
            src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="paste"
            className="h-80 md:h-96 object-cover"
          />
          <div className="absolute top-[-2rem] right-0">
            <Badge title="Chef Alexander" type="Executive chef" rate={3} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Blog;
