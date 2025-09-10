import { NavLink } from "react-router";

const NavBarItem = ({ to, content }) => {
  return (
    <NavLink className="hover:opacity-70 transition-all" to={to} end>
      {content}
    </NavLink>
  );
};

export default NavBarItem;
