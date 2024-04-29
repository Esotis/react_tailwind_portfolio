import React from "react";
const clientLogo = [
  {
    client: "Google",
    source: "/img/google-svg.png",
  },
  {
    client: "Gojek",
    source: "/img/gojek-svg.png",
  },
  {
    client: "Grab",
    source: "/img/grab-svg.png",
  },
  {
    client: "Tokopedia",
    source: "/img/tokopedia-svg.png",
  },
];

function ClientRight() {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center">
        {clientLogo.map((arr, index) => {
          return (
            <React.Fragment key={index}>
              <a
                href="#"
                className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
              >
                <img
                  src={arr.source}
                  alt={arr.client}
                  title="This is just example"
                />
              </a>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}

export default ClientRight;
