"use client";

import { Analytics } from "@vercel/analytics/next";
import RandomCat from "../components/RandomCat";
import { motion } from "motion/react";
import { IoStar } from "react-icons/io5";
import { useEffect, useState } from "react";

const More = () => {
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const interval = setInterval(
      () => {
        setShake(true);
        setTimeout(() => setShake(false), 600);
      },
      Math.random() * 10000 + 2000,
    );

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <main className="scrollbar-hide mb-4 lg:mb-13lg:w-2xl md:w-2xl sm:w-xl w-sm mx-auto mt-16 font-[Inter] flex flex-col gap-20">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <p className="text-4xl">a bit more</p>
            <br />
            <p>some other interests</p>
          </div>
          <RandomCat />
        </div>

        <div>
          <p className="text-xl mb-2">homelabbing</p>
          <p>20k+ asset immich server</p>
          <p>tailscale mesh vpn network</p>
          <p>video game server</p>
          <p className="flex gap-1">
            self hosting
            <a
              className="relative hover:opacity-60 transition-all duration-400 top-2"
              href={"https://concrete.seagull-little.ts.net/"}
            >
              <motion.div
                animate={
                  shake
                    ? {
                        rotate: [0, -15, 15, -15, 0],
                        opacity: [1, 0.7, 1, 0.7, 1],
                      }
                    : { rotate: 0, opacity: 1 }
                }
                transition={{ duration: 0.4 }}
              >
                <IoStar size={12} />
              </motion.div>
            </a>
          </p>
        </div>
      </main>
      <Analytics />
    </>
  );
};

export default More;
