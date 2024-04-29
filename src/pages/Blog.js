import React from "react";
const blogs = [
  {
    headingText: "Tips learning in programming",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aomnis.",
    imgSource: "https://source.unsplash.com/360x200?programming",
    content: "Programing",
  },
  {
    headingText: "Americano Coffee in Streetwalk",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, officiis.",
    imgSource: "https://source.unsplash.com/360x200?coffee",
    content: "Coffee",
  },
  {
    headingText: "The most delicious Italian Pizza",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, voluptatem?",
    imgSource: "https://source.unsplash.com/360x200?pizza",
    content: "Pizza",
  },
  {
    headingText: "This animal need to be protected!",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, amet.",
    imgSource: "https://source.unsplash.com/360x200?animals",
    content: "Animals",
  },
];

function Blog() {
  return (
    <>
      <section id="blog" className="pt-36 pb-32 bg-slate-100 dark:bg-dark">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2">Blog</h4>
              <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white">
                My Current Blogs
              </h2>
              <p className="font-medium text-md text-secondary md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                autem exercitationem inventore, veritatis eveniet quia!
              </p>
            </div>
          </div>

          <div className="flex flex-wrap">
            {blogs.map((arr, index) => {
              return (
                <React.Fragment key={index}>
                  <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 dark:bg-slate-800">
                      <img
                        src={arr.imgSource}
                        alt={arr.content}
                        className="w-full h-[200px]"
                      />
                      <div className="py-8 px-6">
                        <h3>
                          <a
                            href="#"
                            className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate dark:text-white"
                          >
                            {arr.headingText}
                          </a>
                        </h3>
                        <p className="font-medium text-base text-secondary mb-6">
                          {arr.text}
                        </p>
                        <a
                          href="#"
                          className="font-medium text-sm text-white opacity-80 bg-primary py-2 px-4 rounded-lg transition duration-300 ease-linear hover:opacity-100"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
