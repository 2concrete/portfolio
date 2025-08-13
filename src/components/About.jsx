import { FileUser, Github, Linkedin } from "lucide-react";
import SocialLink from "./SocialLink";

const About = () => {
  return (
    <>
      <section className="flex justify-center mt-10">
        <div className="flex flex-col gap-2 relative">
          <p className="text-5xl">hi, im daniel. 👋</p>
          <p>
            learning web development in year 12
            <br /> <strong>perth</strong>, western australia
          </p>

          <br />

          <p>
            mastering <strong>react</strong> and <strong>tailwindcss</strong>
          </p>

          <div className="flex gap-3 bottom-1 absolute items-center">
            <SocialLink Icon={Linkedin} href="https://pinterest.com" />
            <SocialLink Icon={Github} href="https://pinterest.com" />
            <SocialLink Icon={FileUser} href="https://pinterest.com" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
