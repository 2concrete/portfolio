import { NavLink } from "react-router";
import { SiGithub } from "react-icons/si";
import { LuExternalLink } from "react-icons/lu";

const FeaturedProject = ({ title, desc, github, link, image }) => {
  return (
    <div className="flex flex-col items-start">
      <img src={image} className="h-50 w-full object-cover rounded shadow-md" />
      <div className="p-1">
        <div className="mb-1 flex justify-between mt-2 items-center">
          <p className="text-xl">{title}</p>
          <div className="flex gap-2 ">
            <NavLink
              className="hover:opacity-80 transition-all"
              to={github}
              end
            >
              <SiGithub size={19} />
            </NavLink>
            <NavLink to={link} end>
              <LuExternalLink size={20} />
            </NavLink>
          </div>
        </div>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default FeaturedProject;
