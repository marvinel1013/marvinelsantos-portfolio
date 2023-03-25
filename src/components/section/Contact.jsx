import Text from "../reusable_components/reusable_text/Text";
import CoverImage from "../../assets/images/cloud-bg.png";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

function Contact() {
  const icons = [
    <MdOutlineMail />,
    <FaFacebook />,
    <FaLinkedinIn />,
    <FaGithub />,
  ];
  return (
    <div className="dark:text-light text-dark min-h-full w-full mt-28 md:mt-64 pb-28">
      <div className="w-full h-full max-w-6xl mx-auto flex justify-center flex-col px-7 lg:px-3">
        <h1 className="text-2xl md:text-4xl font-extrabold tracking-wide mb-5 text-center md:text-start">
          <Text>CONTACT</Text>
        </h1>

        <h2 className="mb-7 text-lg md:text-2xl font-bold md:text-start text-center">
          Get In Touch
        </h2>
        <div className="h-full w-full flex flex-col lg:flex-row items-center justify-center gap-20">
          {/* LEFT SECTION */}
          <div className=" shadow-lg dark:shadow-md shadow-gray-500 dark:shadow-secondary rounded-xl p-5 flex flex-col justify-between h-[700px] w-fit">
            <div>
              <img
                src={CoverImage}
                alt="cover-image"
                className="w-[350px] rounded-xl"
              />
              <h2 className="text-2xl md:text-3xl font-semibold mt-5">
                <Text>Marvinel</Text> <Text>Santos</Text>
              </h2>
              <h4 className="md:text-lg font-normal dark:font-extralight mt-2">
                Front-End Developer
              </h4>
              <p className="w-[300px] font-normal dark:font-extralight mt-3">
                I am available for full-time positions. Contact me and let's
                talk.
              </p>
            </div>
            <div>
              <h1 className="text-lg font-semibold mb-5">
                <Text>CONNECT</Text> <Text>WITH</Text> <Text>ME</Text>
              </h1>
              <ul className="flex items-center justify-between mb-2">
                {icons.map((icon, index) => (
                  <li
                    className="text-indigo-700 hover:scale-110 duration-300 ease-in dark:text-light md:p-4 p-3 text-xl md:text-2xl rounded-full dark:shadow-md shadow-lg shadow-gray-500 dark:shadow-primary dark:even:shadow-secondary cursor-pointer dark:animate-pulse"
                    key={index}
                  >
                    {icon}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="shadow-lg w-full dark:shadow-md shadow-gray-500 dark:shadow-primary flex-1 min-h-[700px] rounded-xl p-5 md:px-7">
            <form
              action="https://getform.io/f/76e8c8f1-7261-4bec-acdc-88144c422815"
              method="POST"
            >
              <div className="flex md:flex-row flex-col gap-5 w-full justify-between">
                <div className="w-full flex-1">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-dark dark:text-primary md:text-base text-xs"
                  >
                    FULL NAME
                  </label>
                  <input
                    name="name"
                    type="text"
                    id="name"
                    className="w-full p-1 md:p-2 rounded-md bg-white dark:bg-gray-200 border-2 border-gray-300 text-black outline-none "
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-dark dark:text-primary md:text-base text-xs"
                  >
                    PHONE NUMBER
                  </label>
                  <input
                    name="phone"
                    type="text"
                    id="phone"
                    className="w-full p-1 md:p-2 rounded-md bg-white dark:bg-gray-200 border-2 border-gray-300 text-black outline-none "
                  />
                </div>
              </div>
              <div className="mt-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-dark dark:text-primary md:text-base text-xs"
                >
                  EMAIL
                </label>
                <input
                  name="email"
                  type="text"
                  id="email"
                  className="w-full p-1 md:p-2 rounded-md bg-white dark:bg-gray-200 border-2 border-gray-300 text-black outline-none "
                />
              </div>

              <div className="mt-5">
                <label
                  htmlFor="subject"
                  className="block mb-2 text-dark dark:text-primary md:text-base text-xs"
                >
                  SUBJECT
                </label>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  className="w-full p-1 md:p-2 rounded-md bg-white dark:bg-gray-200 border-2 border-gray-300 text-black outline-none "
                />
              </div>
              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="block mb-2 text-dark dark:text-primary md:text-base text-xs"
                >
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols={30}
                  rows={10}
                  className=" resize-none w-full p-2 rounded-md bg-white dark:bg-gray-200 border-2 border-gray-300 text-black outline-none"
                />
              </div>
              <div className="mt-5">
                <button
                  type="submit"
                  className="text-light md:text-lg tracking-widest bg-gradient-to-r dark:hover:from-primary dark:hover:to-secondary dark:from-secondary dark:to-primary from-indigo-800 to-blue-700 hover:from-blue-700 hover:to-indigo-800 duration-300 ease-in p-3 md:p-4 rounded-md w-full"
                >
                  Let's Talk
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
