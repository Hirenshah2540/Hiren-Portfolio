import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import nodejs from "../assets/nodejs.png";
import mongodb from "../assets/mongodb.png";

const Experience = () => {
  const Tech = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: js,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React js",
      style: "shadow-blue-600",
    },

    {
      id: 5,
      src: tailwind,
      title: "Tailwind ",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nodejs,
      title: "NodeJS",
      style: "shadow-green-800",
    },
  ];
  return (
    <div
      name="experience"
      className=" pt-12 scroll-pt-16 bg-gradient-to-b from-gray-800 to-black h-auto  sm:h-screen lg:h-full w-full text-white font-Basic"
    >
      <div className="max-w-screen-lg flex flex-col justify-center p-4 w-full h-full sm:max-h-screen mx-auto">
        <div className="pb-8">
          <p className="text-4xl inline border-b-4 border-gray-600 font-bold">
            Experience
          </p>
          <p className="pt-3 ">These are the technologies I've learned </p>
        </div>
        <div className=" w-full grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center px-12 py-8 sm:px-0">
          {Tech.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={` flex flex-col justify-between shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-1/3 mx-auto " />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
