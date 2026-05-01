import React from "react";
import { Vpn } from "../components/Vpn";

const page = () => {
  return (
    <>
      <main className="flex h-screen justify-center items-center font-[Inter]">
        <section className="flex justify-between items-center">
          <Vpn />
        </section>
      </main>
    </>
  );
};

export default page;
