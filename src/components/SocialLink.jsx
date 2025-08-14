const SocialLink = ({ Icon, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      className="cursor-pointer hover:opacity-80 transition-all"
    >
      {Icon && <Icon />}
    </a>
  );
};

export default SocialLink;
