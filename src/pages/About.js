import React from "react";
import AboutLeft from "../components/AboutLeft";
import AboutRight from "../components/AboutRight";

function About() {
  return (
    <>
      <section id="about" className="pt-36 pb-32 dark:bg-dark">
        <div className="container">
          <div className="flex flex-wrap">
            <AboutLeft />
            <AboutRight />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
