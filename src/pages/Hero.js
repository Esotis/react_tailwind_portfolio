import React from "react";
import HeroLeft from "../components/HeroLeft";
import HeroRight from "../components/HeroRight";

function Hero() {
  return (
    <>
      <section className="pt-36 dark:bg-dark" id="home">
        <div className="container">
          <div className="flex flex-wrap">
            <HeroLeft />
            <HeroRight />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
