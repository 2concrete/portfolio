import { FaGithub, FaLinkedin } from "react-icons/fa";
import SocialLink from "./SocialLink";

const Top = () => {
  return (
    <>
      <div className="flex flex-col gap-2 justify-between">
        <div>
          <h1 className="text-4xl mb-1.5">hi, i&apos;m daniel</h1>
          <p>web developer</p>
          <p className="text-sm opacity-70">perth, australia</p>
        </div>
        <div className="flex gap-2">
          <SocialLink icon={FaGithub} link="https://github.com/2concrete" />
          <SocialLink
            icon={FaLinkedin}
            link="https://www.linkedin.com/in/danielpeace1"
          />
        </div>
      </div>
    </>
  );
};

export default Top;
