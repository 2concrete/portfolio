import About from "../components/About";
import FeaturedProjects from "../components/FeaturedProjects";
import NavBar from "../components/NavBar";
import RandomCat from "../components/RandomCat";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="flex mt-20 justify-between">
        <About />
        <RandomCat />
      </div>
      <FeaturedProjects />
    </div>
  );
};

export default Home;
