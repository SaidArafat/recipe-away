"use client";
import { Feedback } from "@/types";
import React from "react";
import Media from "../ui/media/Media";
import Icon from "../ui/icon/Icon";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const FeedbackSlide = ({
  slide,
  nextSlide,
  prevSlide,
}: {
  slide: Feedback;
  nextSlide: () => void;
  prevSlide: () => void;
}) => {
  return (
    <blockquote className="flex flex-col items-center">
      <p className="text-2xl before:content-[open-quote] after:content-[close-quote] w-full md:w-3/5 h-40 text-center flex items-center justify-center">
        {slide.message}
      </p>
      <footer className="py-5 flex flex-col items-center justify-center space-y-8">
        <Media image={slide.image} address={slide.job} title={slide.title} />
        <div className="flex items-center justify-center space-x-5">
          <button onClick={nextSlide}>
            <Icon primary>
              <FiChevronLeft />
            </Icon>
          </button>
          <button onClick={prevSlide}>
            <Icon>
              <FiChevronRight />
            </Icon>
          </button>
        </div>
      </footer>
    </blockquote>
  );
};

export default FeedbackSlide;
