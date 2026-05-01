import React from "react";
import { Vpn } from "../components/Vpn";
import { Analytics } from "@vercel/analytics/next";

const page = () => {
  return (
    <>
      <main className="flex h-screen justify-center items-center font-[Inter]">
        <section className="flex justify-between items-center">
          <Vpn />
        </section>
        <Analytics />
      </main>
    </>
  );
};

export default page;
