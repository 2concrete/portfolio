import { Analytics } from "@vercel/analytics/next";
import Education from "./components/Education";
import ProjectSection from "./components/Projects";
import RandomCat from "./components/RandomCat";
import Top from "./components/Top";

export default function Home() {
  return (
    <>
      <main className="scrollbar-hide px-3 mb-15 lg:w-2xl md:w-2xl sm:w-xl mx-auto mt-16 font-[Inter] flex flex-col gap-20">
        <section className="flex gap-2 justify-between">
          <Top />
          <RandomCat />
        </section>
        <section className="gap-10 lg:flex lg:justify-between md:justify-between">
          <ProjectSection />
          <Education />
        </section>
      </main>
      <Analytics />
    </>
  );
}
