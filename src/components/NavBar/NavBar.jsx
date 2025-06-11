import feather from "feather-icons";
import { useEffect } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  useEffect(() => {
    feather.replace();
  }, []);
  return (
    <header>
      <nav>
        <ul className="flex">
          <li>
            <Link className="link" to="/">
              home
            </Link>
          </li>
          <li>
            <Link className="link" to="/projects">
              projects
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              contact
            </Link>
          </li>
        </ul>
        <div className="flex">
          <ul>
            <li>
              <a
                className="link"
                href="https://github.com/2concrete"
                data-feather="github"
              ></a>
            </li>
            <li>
              <a
                className="link"
                href="https://www.linkedin.com/in/daniel-peace-0420ba368/"
                data-feather="linkedin"
              ></a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
