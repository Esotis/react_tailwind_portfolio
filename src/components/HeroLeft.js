import React from "react";

function HeroLeft() {
  return (
    <>
      <div className="w-full self-center px-4 md:w-1/2">
        <h1 className="text-base font-poppins font-semibold text-primary md:text-xl lg:text-2xl ">
          Hi All 👋, I'm
          <span className="block font-bold text-dark text-4xl md:text-5xl lg:text-6xl dark:text-white">
            CoffinS
          </span>
        </h1>
        <h2 className="font-medium text-secondary text-lg mb-5 lg:text-xl ">
          Student |{" "}
          <span className="text-dark font-semibold dark:text-white">
            Web Developer
          </span>
        </h2>
        <p className="font-medium text-secondary mb-10 leading-relaxed lg:text-lg">
          First project with TailWind CSS about{" "}
          <span className="text-dark font-bold dark:text-white">
            Portfolio Web
          </span>
        </p>
        <a
          href="#contact"
          className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-500 ease-in-out lg:text-lg"
        >
          Contact Me
        </a>
      </div>
    </>
  );
}

export default HeroLeft;
