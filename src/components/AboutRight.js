import React from "react";
import SocialMediaIcon from "./SocialMediaIcon";

function AboutRight() {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/2">
        <h3 className="font-bold text-dark text-2xl mb-4 md:text-3xl md:pt-7 dark:text-white">
          My Skills
        </h3>
        <p className="font-medium text-base text-secondary mb-6 lg:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          pariatur, dignissimos sapiente veritatis quam vitae hic!
        </p>
        <div className="flex items-center">
          <SocialMediaIcon />
        </div>
      </div>
    </>
  );
}

export default AboutRight;
