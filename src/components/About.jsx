import { LuChevronRight } from "react-icons/lu";
import { SiGit, SiJavascript, SiReact, SiTailwindcss } from "react-icons/si";

const About = () => {
  return (
    <>
      <p className="text-5xl mb-1">hi, im daniel 👋</p>
      <p className="text-md flex items-center mb-3">
        <LuChevronRight /> perth, australia
      </p>
      <p className="text-lg mb-2">learning web development in year 12</p>
      <p className="text-lg flex gap-2">
        <SiReact color="#" size={25} />
        <SiTailwindcss size={25} />
        <SiJavascript size={25} />
        <SiGit size={25} />
      </p>
    </>
  );
};

export default About;
