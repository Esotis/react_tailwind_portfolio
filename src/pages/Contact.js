import React from "react";

function Contact() {
  return (
    <>
      <section id="contact" className="pt-36 pb-32 dark:bg-slate-800">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2">
                Contact
              </h4>
              <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white">
                Call Us!
              </h2>
              <p className="font-medium text-md text-secondary md:text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
                quae quo laboriosam.
              </p>
            </div>
          </div>

          <form>
            <div className="w-full lg:w-2/3 lg:mx-auto">
              <div className="w-full px-4 mb-8">
                <label
                  htmlFor="name"
                  className="text-base text-primary font-bold block mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-primary focus:outline-2 focus:outline-offset-4"
                />
              </div>
              <div className="w-full px-4 mb-8">
                <label
                  htmlFor="email"
                  className="text-base text-primary font-bold block mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-primary focus:outline-2 focus:outline-offset-4"
                />
              </div>
              <div className="w-full px-4 mb-8">
                <label
                  htmlFor="message"
                  className="text-base text-primary font-bold block mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full h-32 bg-slate-200 text-dark p-3 rounded-md focus:outline-primary focus:outline-2 focus:outline-offset-4"
                ></textarea>
              </div>
              <div className="w-full px-4">
                <button
                  className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full opacity-80 hover:opacity-100 hover:shadow-lg transition duration-500"
                  disabled
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
