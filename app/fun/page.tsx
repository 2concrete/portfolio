"use client";

import { useState, type ReactElement } from "react";
import RandomCat from "../components/RandomCat";
import InfiniteButton from "./components/InfiniteButton";
import NumberGuesser from "./components/NumberGuesser";
import Motion from "./components/Motion";
import Motion2 from "./components/Motion2";
import Motion3 from "./components/Motion3";

const page = () => {
  const [selected, setSelected] = useState<ReactElement | null>(
    <InfiniteButton />,
  );
  const [active, setActive] = useState<number>(1);

  return (
    <main className="scrollbar-hide mb-4 lg:mb-13lg:w-2xl md:w-2xl sm:w-xl w-sm mx-auto mt-16 font-[Inter] flex flex-col gap-20">
      <section className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="text-4xl mb-1.5">fun</h1>

          <span className="flex gap-1 items-center relative">
            <p>random stuff</p>
          </span>
        </div>
        <RandomCat />
      </section>
      <section className="flex flex-col gap-4">
        <nav className="flex gap-4">
          <button
            className={`${active === 1 ? "border-neutral-100" : "border-neutral-600"} border  rounded-full w-10 h-10 cursor-pointer hover:border-neutral-100 transition-all`}
            onClick={() => {
              setActive(1);
              setSelected(<InfiniteButton />);
            }}
          >
            1
          </button>
          <button
            className={`${active === 2 ? "border-neutral-100" : "border-neutral-600"} border rounded-full w-10 h-10 cursor-pointer hover:border-neutral-100 transition-all`}
            onClick={() => {
              setActive(2);
              setSelected(<NumberGuesser />);
            }}
          >
            2
          </button>
          <button
            className={`${active === 3 ? "border-neutral-100" : "border-neutral-600"} border rounded-full w-10 h-10 cursor-pointer hover:border-neutral-100 transition-all`}
            onClick={() => {
              setActive(3);
              setSelected(<Motion />);
            }}
          >
            3
          </button>
          <button
            className={`${active === 4 ? "border-neutral-100" : "border-neutral-600"} border rounded-full w-10 h-10 cursor-pointer hover:border-neutral-100 transition-all`}
            onClick={() => {
              setActive(4);
              setSelected(<Motion2 />);
            }}
          >
            4
          </button>
          <button
            className={`${active === 5 ? "border-neutral-100" : "border-neutral-600"} border rounded-full w-10 h-10 cursor-pointer hover:border-neutral-100 transition-all`}
            onClick={() => {
              setActive(5);
              setSelected(<Motion3 />);
            }}
          >
            5
          </button>
        </nav>
        {selected}
      </section>
    </main>
  );
};

export default page;
