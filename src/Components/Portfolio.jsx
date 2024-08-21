import React from "react";
import Estate from "../assets/Estate.png";
import CV from "../assets/Portfolio.png";
import Task from "../assets/Task.png";
import { Link } from "react-scroll";

const Portfolio = () => {
  const work = [
    {
      id: 1,
      src: Estate,
      href: "https://real-estate-q115.onrender.com",
      code: "https://github.com/Hiren2550/Real-Estate",
    },
    {
      id: 2,
      src: Movie,
      href: "https://movie-mo5y.onrender.com",
      code: "https://github.com/Hiren2550/Movie",
    },
    {
      id: 3,
      src: Task,
      href: "https://task-manager-trch.onrender.com",
      code: "https://github.com/Hiren2550/Learn_NextJS",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 h-full sm:h-screen  w-full text-white font-Basic"
    >
      <div className="max-w-screen-lg flex flex-col justify-center p-4 w-full h-auto sm:h-screen mx-auto">
        <div className="pb-8">
          <p className="text-4xl inline border-b-4 border-gray-600 font-bold">
            Portfolio
          </p>
          <p className="py-5">Check out some of my work right here </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 px-8 sm:px-0 gap-8">
          {work.map(({ id, src, href, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md hover:scale-105 duration-200"
                height={1000}
              />

              <div className="flex items-center justify-center">
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <button className="py-3 px-6 hover:scale-105 w-1/2 m-3">
                    Demo
                  </button>
                </a>

                <a href={code} target="_blank" rel="noopener noreferrer">
                  <button className="py-3 px-6 hover:scale-105 w-1/2 m-3">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
