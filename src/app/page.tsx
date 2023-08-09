import React from "react";
import Hero from "@/components/hero/Hero";
import Blog from "@/components/blog/Blog";
import Popular from "@/components/popular/Popular";
import axios from "axios";
import Feedback from "@/components/feedback/Feedback";
import Famous from "@/components/famous/Famous";

const getData = async () => {
  try {
    const { data } = await axios.get(
      "https://forkify-api.herokuapp.com/api/search?q=goat"
    );
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const Home = async () => {
  const { recipes } = await getData();

  return (
    <>
      <Hero />
      <Famous />
      <Blog />
      <Popular recipes={recipes} />
      <Feedback />
    </>
  );
};

export default Home;
