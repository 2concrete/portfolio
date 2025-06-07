import "./App.css";
import About from "./components/About/About";
import NavBar from "./components/NavBar/NavBar";
import RandImg from "./components/RandImg/RandImg";

function App() {
  return (
    <>
      <div className="main">
        <NavBar />
        <div className="split">
          <About />
          <RandImg />
        </div>
      </div>
    </>
  );
}

export default App;
