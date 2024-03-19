import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Socialink from "./Components/Socialink";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import Scroll from "./Components/Scroll";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Socialink />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Scroll />
    </div>
  );
}
