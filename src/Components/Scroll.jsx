import React, { useEffect, useState } from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";

const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const Toggle = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", Toggle);

    return () => {
      window.removeEventListener("scroll", Toggle);
    };
  }, []);
  return (
    <div className=" right-8 bottom-5 fixed">
      {isVisible && (
        <button type="button" onClick={handleScroll}>
          <IoIosArrowDropupCircle size={40} className="text-sky-600" />
        </button>
      )}
    </div>
  );
};

export default Scroll;
