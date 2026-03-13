import { IconType } from "react-icons";

type SocialLinkProps = {
  icon: IconType;
  link: string;
};

const SocialLink = ({ icon: Icon, link }: SocialLinkProps) => {
  return (
    <a href={link}>
      <Icon className="size-6 cursor-pointer hover:opacity-70 transition-all active:scale-90" />
    </a>
  );
};

export default SocialLink;
