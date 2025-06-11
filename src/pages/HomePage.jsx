import "../App.css";
import NavBar from "../components/NavBar/NavBar";
import About from "../components/About/About";
import RandImg from "../components/RandImg/RandImg";
import Tech from "../components/Tech/Tech";

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
      </div>
    </>
  );
}

export default HomePage;
