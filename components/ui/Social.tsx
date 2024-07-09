import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, link: "https://github.com/LukeChester03" },
  { icon: <FaLinkedin />, link: "https://linkedin.com/in/luke-chester-844516220" },
];

interface SocialProps {
  containerStyles: any;
  iconStyles: any;
}

const Social: React.FC<SocialProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.link} className={iconStyles} target="_blank">
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
