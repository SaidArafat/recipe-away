"use client";
import React, { useState } from "react";
import { feedbacks } from "../../../data";
import FeedbackSlide from "./FeedbackSlide";
import Container from "../ui/layout/Container";

const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? feedbacks.length - 1 : currentIndex - 1;

    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === feedbacks.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;

    setCurrentIndex(newIndex);
  };

  return (
    <Container className="">
      <FeedbackSlide
        slide={feedbacks[currentIndex]}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
      />
    </Container>
  );
};

export default Feedback;
