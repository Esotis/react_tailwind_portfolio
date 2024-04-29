import React, { useState } from "react";
import DarkMode from "../components/DarkMode";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = (event) => {
    setClick(!click);
  };

  window.addEventListener("click", function (e) {
    const hamburgerMenu = document.querySelector("#hamburger");
    const navMenu = document.querySelector("#navMenu");
    if (e.target !== navMenu && e.target !== hamburgerMenu) {
      setClick(false);
    }
  });

  return (
    <>
      <nav className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <a
                href="#home"
                className="font-bold text-lg text-primary block py-6"
              >
                CoffinS
              </a>
            </div>
            <div className="flex items-center px-4">
              <button
                name="hamburger"
                type="button"
                className={`${
                  click ? "btn-active" : ""
                } block absolute right-4 lg:hidden`}
                onClick={handleClick}
                id="hamburger"
              >
                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                <span className="hamburger-line transition duration-300"></span>
                <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
              </button>

              {/* navbar-menu */}
              <div
                className={`${
                  click ? "" : "hidden"
                } absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg-rounded-none dark:bg-dark dark:shadow-slate-500 lg:dark:bg-transparent`}
                id="navMenu"
              >
                <ul className="block lg:flex">
                  <li className="group">
                    <a
                      href="#home"
                      className="text-base text-dark font-medium py-2 mx-8 flex group-hover:text-primary dark:text-white"
                      onClick={handleClick}
                    >
                      Home
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#about"
                      className="text-base text-dark font-medium py-2 mx-8 flex group-hover:text-primary dark:text-white"
                      onClick={handleClick}
                    >
                      About
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#portfolio"
                      className="text-base text-dark font-medium py-2 mx-8 flex group-hover:text-primary dark:text-white"
                      onClick={handleClick}
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#clients"
                      className="text-base text-dark font-medium py-2 mx-8 flex group-hover:text-primary dark:text-white"
                      onClick={handleClick}
                    >
                      Clients
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#blog"
                      className="text-base text-dark font-medium py-2 mx-8 flex group-hover:text-primary dark:text-white"
                      onClick={handleClick}
                    >
                      Blog
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#contact"
                      className="text-base text-dark font-medium py-2 mx-8 flex group-hover:text-primary dark:text-white"
                      onClick={handleClick}
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <DarkMode />
    </>
  );
}

export default Navbar;
