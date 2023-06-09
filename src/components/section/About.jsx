import Button from "../reusable_components/reusable_button/Button";
import Text from "../reusable_components/reusable_text/Text";
import { BsDownload } from "react-icons/bs";
import MyPhoto from "../../assets/images/MyPhoto.png";

function About() {
  return (
    <div className="dark:text-light text-dark min-h-screen w-full pb-10 mt-20 md:mt-32">
      <div className="h-full w-full max-w-6xl mx-auto flex flex-col justify-center px-5 lg:px-3">
        <h1
          className="text-2xl md:text-4xl font-extrabold tracking-wide mb-10 text-center md:text-start"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          <Text>ABOUT</Text>
        </h1>
        <div className="flex lg:flex-row flex-col justify-between items-center">
          <div className="h-full max-w-2xl">
            <h2
              className="mb-5 text-xl md:text-3xl font-bold md:text-start text-center"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              Who I Am
            </h2>
            <p
              className="text-center md:text-base text-sm md:text-start md:font-light tracking-wider leading-5 text-black dark:text-gray-400"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              I am a graduate of Bachelor of Science in Information Technology
              and I am a self-taught Front-End Web Developer who is passionate
              about building beautiful and user-friendly websites. With a well
              known foundation in HTML , CSS and JavaScript. I have relevant
              working experience with React. Currently seeking a full-time
              position. I love to work on web application using technologies
              like React, NextJS, Tailwind and Firebase and also I always
              looking forward to improve my skills and learn new
              technologies.The more I learned, the more I realized that this is
              what I want to do for a living.
            </p>
            <br />
            <p
              className="text-center md:text-base text-sm md:text-start md:font-light tracking-wider leading-5 text-black dark:text-gray-400"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              What I love most about coding is the challenge of problem-solving.
              I find it deeply satisfying to tackle complex issues and come up
              with solutions that meet both the user's needs and the project's
              requirements. Some of my technical skills include experience with
              HTML, CSS, JavaScript, and frameworks like React and NextJS. I am
              also skilled in tools such as Redux/Redux Toolkit and have
              knowledge of UI libraries like Tailwind CSS, MUI and Framer
              Motion. I am always looking forward to learn new technologies and
              to achieve my dreams to become a Full Stack Web Developer.
            </p>
            <div className="flex justify-center lg:justify-start">
              <a
                href="/MarvinelSantosResume.pdf"
                download={true}
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                <Button style="md:p-4 md:text-base text-sm p-3 font-semibold flex items-center gap-2 rounded-md mt-8">
                  Download CV{" "}
                  <span className="animate-bounce">
                    <BsDownload size={23} />
                  </span>
                </Button>
              </a>
            </div>
          </div>

          <div
            className="p-3 bg-white dark:bg-black duration-500 rounded-lg cursor-pointer shadow-lg dark:shadow-lg shadow-gray-500 dark:shadow-primary lg:mt-0 mt-16"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
          >
            <img
              src={MyPhoto}
              alt="about-image"
              className="md:w-[300px] rounded-lg bg-gradient-to-r from-[#1F3A68] to-[#27384C] w-[300px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
