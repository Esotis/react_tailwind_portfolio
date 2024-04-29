import React from "react";
import ArrowUp from "../components/ArrowUp";
import SocialMediaIcon from "../components/SocialMediaIcon";

function Footer(props) {
  return (
    <>
      <footer className="bg-dark pt-24 pb-12">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
              <h2 className="font-bold text-4xl text-white mb-5">CoffinS</h2>
              <h3 className="font-bold text-2xl mb-2">Call Us</h3>
              <p>jovananggata1@gmail.com</p>
              <p>Jl. Plampitan No.31</p>
              <p>Semarang</p>
            </div>
            <div className="w-full px-4 mb-12 md:w-1/3">
              <h3 className="font-semibold text-xl text-white mb-5">
                Category
              </h3>
              <ul className="text-slate-300">
                <li>
                  <a
                    href="#"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Programming
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Technology
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Life Style
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full px-4 mb-12 md:w-1/3">
              <h3 className="font-semibold text-xl text-white mb-5">Links</h3>
              <ul className="text-slate-300">
                <li>
                  <a
                    href="#home"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#portfolio"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#clients"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Clients
                  </a>
                </li>
                <li>
                  <a
                    href="#blog"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* copyright footer */}
          <div className="w-full pt-10 border-t border-slate-700">
            <div className="flex items-center justify-center mb-5">
              <SocialMediaIcon />
            </div>
            <p className="font-medium text-sm text-slate-500 text-center">
              Created by{" "}
              <a
                href="https://instagram.com/jovananggata"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-primary"
              >
                CoffinS
              </a>
              , using{" "}
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-sky-500"
              >
                Tailwind CSS
              </a>
            </p>
          </div>
        </div>
      </footer>
      <ArrowUp arrow={props.arrow} />
    </>
  );
}

export default Footer;
