import Text from "../reusable_text/Text";
import { NavLinks } from "../../data/ProjectData";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-scroll";

function SlideBarSection({ handleOpenMobileMenu }) {
  const icons = [
    <MdOutlineMail />,
    <FaFacebook />,
    <FaLinkedinIn />,
    <FaGithub />,
    <BsFillPersonLinesFill />,
  ];
  return (
    <div className="h-full w-full">
      <div className="mt-14">
        <h2 className=" text-center border-b-2 pb-3 border-indigo-500 dark:border-secondary">
          Let's build something together
        </h2>
        <ul className="mt-8">
          {NavLinks.map((link, index) => (
            <Link
              onClick={handleOpenMobileMenu}
              key={index}
              to={link}
              smooth={true}
              duration={500}
            >
              <li className=" uppercase text-center mb-3 tracking-widest">
                {link}
              </li>
            </Link>
          ))}
        </ul>
        <h1 className="font-semibold mt-8 text-lg text-center">
          <Text>LET'S CONNECT</Text>
        </h1>
        <ul className="mt-5 flex justify-center gap-3 items-center">
          {icons.map((icon, index) => (
            <li
              className="text-indigo-700 dark:text-light shadow-lg dark:shadow-md shadow-gray-500 dark:shadow-primary dark:even:shadow-secondary p-2 rounded-full text-2xl"
              key={index}
            >
              {icon}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SlideBarSection;
