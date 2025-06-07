import feather from "feather-icons";
import { useEffect } from "react";
import "./NavBar.css";

const NavBar = () => {
  useEffect(() => {
    feather.replace();
  }, []);
  return (
    <header>
      <nav>
        <ul className="flex">
          <li>
            <a>home</a>
          </li>
          <li>
            <a>projects</a>
          </li>
          <li>
            <a>contact</a>
          </li>
        </ul>
        <div className="flex">
          <ul>
            <li>
              <a href="https://github.com/2concrete" data-feather="github"></a>
            </li>
            <li>
              <a href data-feather="linkedin"></a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
