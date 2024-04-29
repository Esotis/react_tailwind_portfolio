import React from "react";

function HeroRight() {
  return (
    <div className="w-full self-end px-4 md:w-1/2">
      <div className=" relative mt-10 lg:m-0 lg:right-0">
        <img
          src="/img/profile-portfolio.png"
          alt="CoffinS"
          className="max-w-full mx-auto relative z-10"
        />
        <span className="absolute bottom-1/4 left-1/2 -translate-x-1/2 lg:scale-125">
          <svg
            width={400}
            height={400}
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#14b8a6"
              d="M69.8,-39C82.9,-17.7,80.5,13.7,66.3,38.6C52.1,63.4,26.1,81.7,-1.3,82.4C-28.6,83.2,-57.2,66.3,-66.7,44.1C-76.3,21.9,-66.9,-5.6,-52.6,-27.6C-38.4,-49.6,-19.2,-66,4.6,-68.7C28.4,-71.3,56.8,-60.3,69.8,-39Z"
              transform="translate(100 100) scale(1.2)"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}

export default HeroRight;
