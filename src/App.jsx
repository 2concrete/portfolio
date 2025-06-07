import "./App.css";
import About from "./components/About/About";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <div className="main-container">
        <NavBar />
        <About />
      </div>
    </>
  );
}

export default App;
