import { Sun } from "lucide-react";
import { NavLink } from "react-router";
import SocialLink from "./SocialLink";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex w-150 justify-between items-center">
          <ul className="flex justify-left gap-5 h-24 items-center">
            <li>
              <NavLink
                className="text-neutral-900 hover:opacity-80 transition-all"
                to="/"
                end
              >
                home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-neutral-900 hover:opacity-80 transition-all"
                to="/projects"
                end
              >
                projects
              </NavLink>
            </li>
          </ul>
          <ul className="flex gap-5">
            <li>
              <SocialLink Icon={Sun} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
