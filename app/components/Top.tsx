import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import SocialLink from "./SocialLink";
import { IoStar } from "react-icons/io5";

const Top = () => {
  return (
    <>
      <div className="flex flex-col gap-2 justify-between">
        <div>
          <h1 className="text-4xl mb-1.5">hi, i&apos;m daniel</h1>

          <span className="flex gap-1 items-center relative">
            <p>web developer</p>
            <Link
              className="relative hover:opacity-60 transition-all duration-400"
              href={"https://concrete.seagull-little.ts.net/"}
            >
              <IoStar size={12} />
            </Link>
          </span>
          <p className="text-sm opacity-70">perth, australia</p>
        </div>
        <div className="flex gap-2 items-center">
          <SocialLink icon={FaGithub} link="https://github.com/2concrete" />
          <SocialLink
            icon={FaLinkedin}
            link="https://www.linkedin.com/in/danielpeace1"
          />
          <Link href="/vpn" className="text-sm relative -top-px">
            buy my vpn
          </Link>
        </div>
      </div>
    </>
  );
};

export default Top;
