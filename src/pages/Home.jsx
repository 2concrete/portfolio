import About from "../components/About";
import Navbar from "../components/Navbar";
import RandomCat from "../components/RandomCat";

const Home = () => {
  return (
    <div className="w-150 mx-auto">
      <Navbar />
      <div className="flex justify-between gap-10">
        <About />
        <RandomCat />
      </div>
    </div>
  );
};

export default Home;
