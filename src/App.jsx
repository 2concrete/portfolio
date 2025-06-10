import "./App.css";
import About from "./components/About/About";
import NavBar from "./components/NavBar/NavBar";
import RandImg from "./components/RandImg/RandImg";
import Tech from "./components/Tech/Tech";

function App() {
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

export default App;
