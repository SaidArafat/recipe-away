import React from "react";
import Container from "../ui/layout/Container";
import Badge from "../ui/badge/Badge";
import Media from "../ui/media/Media";
import SearchInput from "../search/SearchInput";

const Hero = () => {
  return (
    <Container>
      <header className="flex flex-col items-center justify-center space-y-10 md:space-y-0 md:justify-between md:flex-row-reverse md:space-x-2 mt-10">
        <div className="p-3 border border-primary rounded-full flex items-center justify-center relative">
          <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden">
            <img
              src="https://images.pexels.com/photos/8511837/pexels-photo-8511837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="chef"
              className="h-full object-cover"
            />
          </div>
          <div className="absolute top-0 left-0">
            <Badge title="Chef Alexander" type="Executive chef" rate={3} />
          </div>
          <div className="absolute bottom-0 right-0">
            <Media
              image="https://images.pexels.com/photos/8511837/pexels-photo-8511837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              title="Chef Alexander"
              address="Executive chef"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-10 w-full md:w-2/5">
          <h1 className="font-semibold capitalize text-2xl md:text-3xl lg:text-4xl">
            Let’s start
            <span className="text-primary text-opacity-60"> cooking </span>
            with our popular food recipes
          </h1>
          <p>
            Want to learn cook but confused to start from what? let's
            immediately register your account and look for the recipes.
          </p>
          <SearchInput />
        </div>
      </header>
    </Container>
  );
};

export default Hero;
