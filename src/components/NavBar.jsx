import { FiGithub, FiLinkedin } from "react-icons/fi";
import NavBarItem from "./NavBarItem";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between gap-2 text-lg font-[Inter]">
      <div className="flex gap-2">
        <NavBarItem to="/" content="home" />
        <NavBarItem to="/projects" content="projects" />
      </div>
      <div className="flex gap-3">
        <NavBarItem
          to="https://github.com/2concrete"
          content={<FiGithub size={22} />}
        />
        <NavBarItem
          to="https://www.linkedin.com/in/daniel-peace-0420ba368"
          content={<FiLinkedin size={22} />}
        />
      </div>
    </div>
  );
};

export default NavBar;
