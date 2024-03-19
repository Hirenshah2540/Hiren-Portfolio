import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];
  return (
    <div className="flex font-Basic justify-between items-center w-full h-20 px-4  mb-3 text-white bg-gray fixed ">
      <div>
        <Link to={"home"} smooth duration={500}>
          <h1 className="font-signature text-3xl md:text-4xl ml-2  cursor-pointer">
            Hiren Shah
          </h1>
        </Link>
      </div>

      <ul className="hidden md:flex">
        {links.map((i) => (
          <li
            key={i.id}
            className="px-3 capitalize cursor-pointer text-gray-500 font-semibold hover:scale-105 hover:underline duration-200"
          >
            <Link to={i.link} smooth duration={500}>
              {i.link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-10 pr-4 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 h-screen w-full bg-gradient-to-b from-black to-gray-800 text-gray-400">
          {links.map((i) => (
            <li
              key={i.id}
              className="text-4xl px-4 py-4 capitalize cursor-pointer"
            >
              <Link
                to={i.link}
                smooth
                duration={500}
                onClick={() => setNav(!nav)}
              >
                {i.link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
