import React from "react";
const projects = [
  {
    headingText: "My First Project",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga provident eum minima modi non eveniet.",
  },
  {
    headingText: "My Second Project",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, optio error. Quis ipsam aperiam iusto!",
  },
  {
    headingText: "My Third Porject",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, delectus deleniti? Tempore voluptatem magni beatae?",
  },
  {
    headingText: "My Fourth Project",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quod optio deleniti cumque beatae alias?",
  },
  {
    headingText: "My Fifth Project",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quis repudiandae explicabo rerum esse in.",
  },
];

function Projects() {
  return (
    <>
      {projects.map((arr, index) => {
        return (
          <React.Fragment key={index + 1}>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden h-[300px]">
                <img
                  src={`/img/project-${index + 1}.jpg`}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3 dark:text-white">
                {arr.headingText}
              </h3>
              <p className="font-medium text-base text-secondary">{arr.text}</p>
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
}

export default Projects;
