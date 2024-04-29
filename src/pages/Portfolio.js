import React from "react";
import PortfolioLeft from "../components/PortfolioLeft";
import PortfolioRight from "../components/PortfolioRight";

function Portfolio() {
  return (
    <>
      <section
        id="portfolio"
        className="pt-36 pb-16 bg-slate-100 dark:bg-slate-800"
      >
        <div className="container">
          <PortfolioLeft />
          <PortfolioRight />
        </div>
      </section>
    </>
  );
}

export default Portfolio;
