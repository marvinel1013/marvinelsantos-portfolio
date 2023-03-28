import html from "../../assets/tech_logo/html.png";
import css from "../../assets/tech_logo/css.png";
import javascript from "../../assets/tech_logo/javascript.png";
import reactjs from "../../assets/tech_logo/react.png";
import tailwind from "../../assets/tech_logo/tailwind.png";
import nextjs from "../../assets/tech_logo/nextjs.png";
import typescript from "../../assets/tech_logo/typescript.png";
import redux from "../../assets/tech_logo/redux.png";
import reactquery from "../../assets/tech_logo/reactquery.svg";
import firebase from "../../assets/tech_logo/firebase.png";
import vite from "../../assets/tech_logo/vite.png";
import github from "../../assets/tech_logo/github.png";

function SkillsTechCards() {
  const techData = [
    {
      logo: html,
      title: "HTML",
      shadowColor: "shadow-orange-500",
    },
    {
      logo: css,
      title: "CSS",
      shadowColor: "shadow-blue-500",
    },
    {
      logo: javascript,
      title: "JavaScript",
      shadowColor: "shadow-yellow-500",
    },
    {
      logo: reactjs,
      title: "React JS",
      shadowColor: "shadow-sky-500",
    },
    {
      logo: tailwind,
      title: "Tailwind CSS",
      shadowColor: "shadow-cyan-900",
    },
    {
      logo: nextjs,
      title: "Next JS",
      shadowColor: "shadow-gray-500",
    },
    {
      logo: typescript,
      title: "TypeScript",
      shadowColor: "shadow-blue-700",
    },
    {
      logo: redux,
      title: "Redux",
      shadowColor: "shadow-violet-900",
    },
    {
      logo: reactquery,
      title: "React Query",
      shadowColor: "shadow-rose-600",
    },
    {
      logo: firebase,
      title: "Firebase",
      shadowColor: "shadow-yellow-500",
    },
    {
      logo: vite,
      title: "Vite",
      shadowColor: "shadow-purple-600",
    },
    {
      logo: github,
      title: "GitHub",
      shadowColor: "shadow-gray-500",
    },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-20">
      {techData.map((data, index) => (
        <div
          className="group cursor-pointer flex items-center justify-center flex-col gap-5 hover:shadow hover:shadow-gray-500 dark:hover:shadow-gray-800 shadow-inner dark:shadow-black shadow-gray-400 py-4 p-2 rounded-lg"
          key={index}
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <img
            src={data.logo}
            alt="logo"
            className={
              "lg:w-28 md:w-24 w-20 shadow-lg rounded-lg p-3 dark:bg-dark bg-slate-300 cursor-pointer duration-300 dark:animate-pulse group-hover:scale-105" +
              " " +
              data.shadowColor
            }
          />
          <span className="md:text-base text-sm md:font-semibold font-normal">
            {data.title}
          </span>
        </div>
      ))}
    </div>
  );
}

export default SkillsTechCards;
