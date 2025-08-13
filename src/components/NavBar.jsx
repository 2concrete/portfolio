import NavItem from "./NavItem";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex w-3xl justify-between items-center">
          <ul className="flex justify-left gap-5 h-24 items-center">
            <NavItem to="/" text="home" />
            <NavItem to="/projects" text="projects" />
          </ul>
          <ul className="flex gap-5">
            <ThemeToggle />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
