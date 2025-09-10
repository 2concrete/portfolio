import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <div className="w-2/4 mx-auto mt-7 text-neutral-800">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
