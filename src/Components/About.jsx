import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white font-Basic"
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg mx-auto p-4">
        <div className="pb-8">
          <p className="text-4xl font-bold inline  border-b-4 border-gray-600">
            About
          </p>
        </div>
        <p className="text-xs sm:text-xl mt-6 sm:mt-18">
          I have completed my BE from L J institute of engineering and
          technology in ahmedabad.I am hard working and enthusiastic about
          learning new skills. . I am well organised and always meet deadlines
          when they have been set. I love to work on website using technologies
          like React Tailwind NodeJs and MongoDB. I am writing to express my
          strong interest in MERN Stack Developement. I am passionate MERN Stack
          Developer with expertise in HTML, CSS, React, Tailwind, Node.js,
          Express and MongoDB
        </p>
        <br />
        <p className="text-xs sm:text-xl">
          I had privilege to work on project which is Property Management which
          is my final semester project. anyone who want to sell or rent property
          that can use this website.this website I've deployed on server using
          render.com.
        </p>
      </div>
    </div>
  );
};

export default About;
