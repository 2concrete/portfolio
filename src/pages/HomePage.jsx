import "../App.css";
import NavBar from "../components/NavBar/NavBar";
import About from "../components/About/About";
import RandImg from "../components/RandImg/RandImg";
import Tech from "../components/Tech/Tech";
import Projects from "../components/Projects/Projects";

function HomePage() {
  return (
    <>
      <div className="main">
        <NavBar />
        <div className="split">
          <div>
            <About />
            <Tech />
          </div>
          <RandImg />
        </div>
        <Projects />
      </div>
    </>
  );
}

export default HomePage;
