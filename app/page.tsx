import RandomCat from "./components/RandomCat";
import Top from "./components/Top";

export default function Home() {
  return (
    <div className="lg:w-2xl md:w-2xl sm:w-xl w-md mx-auto mt-16 font-[Inter] flex justify-between">
      <Top />
      <RandomCat />
    </div>
  );
}
