import React from "react";

function ArrowUp(props) {
  return (
    <>
      <a
        href="#home"
        className={`fixed bottom-4 right-4 z-[9999] h-14 w-14 rounded-full bg-primary p-4 ${
          props.arrow ? "flex" : "hidden"
        } items-center justify-center hover:animate-pulse`}
      >
        <i className="fa-sharp fa-solid fa-arrow-up scale-125"></i>
      </a>
    </>
  );
}

export default ArrowUp;
