import ProjectSection from "./components/ProjectSection";
import RandomCat from "./components/RandomCat";
import Top from "./components/Top";

export default function Home() {
  return (
    <>
      <main className="lg:w-2xl md:w-2xl sm:w-xl w-md mx-auto mt-16 font-[Inter] flex flex-col gap-20">
        <section className="flex justify-between">
          <Top />
          <RandomCat />
        </section>
        <section>
          <ProjectSection />
        </section>
      </main>
    </>
  );
}
