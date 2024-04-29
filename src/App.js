import React, { useState } from "react";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Navbar from "./pages/Navbar";
import Portfolio from "./pages/Portfolio";

function App() {
  const [showArrow, setShowArrow] = useState(false);

  window.addEventListener("scroll", () => {
    const navbar = document.querySelector("nav");

    const windowScroll = document.documentElement.scrollTop;

    if (windowScroll > 0) {
      setShowArrow(true);
      return navbar.classList.add("navbar-fixed");
    }

    setShowArrow(false);
    navbar.classList.remove("navbar-fixed");
  });

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Clients />
      <Blog />
      <Contact />
      <Footer arrow={showArrow} />
    </>
  );
}

export default App;
