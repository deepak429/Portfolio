import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { testimonials, skills } from "@/data/data";
import AboutMe from "./AboutMe";

function Client() {
  return (
    <div className="py-10  " id="testimonials">
      <h1 className="heading  mb-10 ">
        Get to
        <span className="text-purple"> Know Me</span>
      </h1>
      <div className="flex item-center justify-center  mb-5">
        <AboutMe />
      </div>
      <h1 className="heading mb-5">
        My
        <span className="text-purple"> Skills</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center  gap-4  md:gap-16 max-lg: mt-10">
        {skills.map(({ id, img, name, nameImg }) => (
          <div
            className="flex md:max-w-60 max-w-32 gap-2  items-center"
            key={id}
          >
            <img src={img} alt={img} className="md:w-11 w-5" />
            <h1 className="font-semibold text-center">{name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Client;
