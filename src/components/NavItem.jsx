import { NavLink } from "react-router";

const NavItem = ({ to, text }) => {
  return (
    <li>
      <NavLink className="text-lg hover:opacity-80 transition-all" to={to} end>
        {text}
      </NavLink>
    </li>
  );
};

export default NavItem;
