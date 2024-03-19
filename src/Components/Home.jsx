import React from "react";
import hero from "../assets/Hero.jpeg";
import bg1 from "../assets/bg1.png";
import bg2 from "../assets/bg2.png";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto  flex flex-col justify-center items-center h-full px-4  md:flex-row">
        <div className="flex flex-col justify-center h-full mt-32 sm:mt-0">
          <h2 className="text-4xl sm:text-6xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4">
            I love to work on website using technologies like React Tailwind
            NodeJs and MongoDB
          </p>
          <div>
            <Link to={"portfolio"} smooth duration={500}>
              <button className="group bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center gap-3 capitalize rounded-md text-white py-3 px-6 w-fit cursor-pointer">
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight size={25} />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="p-3">
          <img
            className="rounded-2xl mx-auto my-auto  w-full "
            src={bg2}
            alt="my profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
