import React from "react";
import ClientLeft from "../components/ClientLeft";
import ClientRight from "../components/ClientRight";

function Clients() {
  return (
    <>
      <section
        id="clients"
        className="pt-36 pb-32 bg-slate-800 dark:bg-slate-100"
      >
        <div className="container">
          <ClientLeft />
          <ClientRight />
        </div>
      </section>
    </>
  );
}

export default Clients;
