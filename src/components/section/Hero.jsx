import Text from "../reusable_components/reusable_text/Text";
import Typewriter from "typewriter-effect";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";

function Hero() {
  const icons = [
    {
      icon: <MdOutlineMail />,
      link: "mailto:1013marvinel@gmail.com",
    },

    {
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/marvinel-santos13/",
    },

    {
      icon: <FaFacebook />,
      link: "https://www.facebook.com/marvinel.santos/",
    },

    {
      icon: <FaGithub />,
      link: "https://github.com/marvinel1013",
    },

    {
      icon: <BsFillPersonLinesFill />,
      link: "/MarvinelSantosResume.pdf",
      download: true,
    },
  ];
  return (
    <div className="h-screen w-full dark:text-light text-dark">
      <div className="h-full w-full max-w-6xl mx-auto flex items-center justify-center">
        <div className="text-center">
          <h2
            className=" text-sm md:text-lg tracking-widest uppercase font-light mb-8 dark:animate-pulse"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            let's build something together
          </h2>
          <h1 className="text-4xl md:text-7xl tracking-tight font-black">
            Hi, I'm{" "}
            <div className="inline-block bg-gradient-to-r dark:from-secondary dark:to-primary from-indigo-800 to-blue-700 text-transparent bg-clip-text">
              <Typewriter
                options={{
                  strings: ["Marvinel", "Santos"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 150,
                }}
              />
            </div>
          </h1>
          <h1 className="text-4xl tracking-tight md:text-7xl font-black mt-2 md:mt-5">
            A <Text>Front-End</Text> <Text>Web</Text> <Text>Developer</Text>
          </h1>
          <p className="mt-10 w-full px-7 md:px-0 md:max-w-3xl mx-auto md:text-lg dark:font-extralight tracking-wide">
            I love to work on web application using technologies like React,
            Next JS and Tailwind CSS and also I always looking forward to
            improve my skills and learn new technologies.
          </p>
          <div className="w-full flex justify-center mt-16">
            <ul className="flex items-center justify-center gap-5 md:gap-10 w-full">
              {icons.map((icon, index) => (
                <a
                  key={index}
                  href={icon.link}
                  download={icon.download}
                  target="_blank"
                >
                  <li className="text-indigo-700 dark:text-light dark:shadow-md shadow-lg shadow-gray-500 dark:shadow-primary dark:even:shadow-secondary p-3 md:p-5 rounded-full text-2xl animate-bounce cursor-pointer">
                    {icon.icon}
                  </li>
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
