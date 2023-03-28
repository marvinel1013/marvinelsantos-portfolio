import Text from "../components/reusable_components/reusable_text/Text";
import React, { useState } from "react";
import { notesAppImgData } from "../data/ProjectData";
import CoverPhoto from "../assets/projects-screen-shot/notes-app/cover.png";
import { BiCodeAlt, BiArrowBack } from "react-icons/bi";
import { BsGlobe2 } from "react-icons/bs";
import {
  MdRadioButtonChecked,
  MdOutlineScreenshotMonitor,
} from "react-icons/md";
import ProjectScreenShot from "../components/project_screenshots/ProjectScreenshot";
import { Link } from "react-router-dom";

function NotesDetailsPage() {
  const [openScreenShot, setOpenScreenShot] = useState(false);

  const handleOpenScreenShot = () => {
    setOpenScreenShot((prevState) => !prevState);
  };

  const techData = [
    "React JS",
    "JavaScript",
    "Vite",
    "Tailwind CSS",
    "Firebase",
  ];

  return (
    <div className="min-h-screen w-full text-dark dark:text-light dark:bg-dark bg-light">
      <div className="w-full h-[30vh] md:h-[40vh] relative bg-dark">
        <img
          src={CoverPhoto}
          alt="cover-photo"
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute left-0 h-full w-full top-[60%] md:top-[70%] text-light">
          <div
            className="w-full max-w-6xl mx-auto px-4"
            data-aos="fade-down"
            data-aos-delay="300"
          >
            <div className="w-full flex items-center justify-between">
              <h1 className="font-bold text-xl md:text-3xl">NOTES APP</h1>
              <Link to={"/"}>
                <div className="flex rounded-xl cursor-pointer items-center gap-1 bg-indigo-500 w-fit p-2 md:text-base text-sm md:p-3">
                  <BiArrowBack size={15} />
                  Back
                </div>
              </Link>
            </div>
            <h2 className="text-sm md:text-lg mt-3">
              React JS / Tailwind / Firebase
            </h2>
          </div>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto mt-1 md:mt-5 px-4">
        <h1
          className="font-bold text-xl md:text-4xl"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <Text>Project</Text> <Text>Description</Text>
        </h1>

        <div className="mt-5 md:mt-0 flex md:flex-row flex-col items-center justify-between">
          <div>
            <h2
              className="md:text-3xl font-bold"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              Overview
            </h2>
            <p
              className="md:mt-5 mt-2 text-sm md:text-base md:w-[550px]"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              In this project, I created a Complete Notes Application and
              Firebase as my back end. I do all the Create, Read, Update and
              Delete (CRUD) operations in Firebase. I used React JS, Vite and
              Tailwind CSS and I used Firestore as my back end and data base. In
              this Application you can search for notes via title. You can
              create new Notes and choose the color of the notes and also you
              can update the color you want. This application is fully
              responsive. This application is hosted in Netlify.
            </p>
            <div
              className="flex text-indigo-700 dark:text-primary items-center gap-4 md:gap-8 my-4 md:mt-8 text-sm md:text-base"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
            >
              <a
                href="https://github.com/marvinel1013/Notes-App"
                target={"_blank"}
              >
                <span className="flex items-center gap-2 p-3 shadow-md shadow-black hover:scale-110 duration-300 ease-in cursor-pointer rounded-md">
                  Code
                  <BiCodeAlt size={20} />
                </span>
              </a>
              <a
                href="https://notes-app-by-marvinel.netlify.app/"
                target={"_blank"}
              >
                <span className="flex items-center gap-2 p-3 shadow-md shadow-black hover:scale-110 duration-300 ease-in cursor-pointer rounded-md">
                  Demo
                  <BsGlobe2 size={18} />
                </span>
              </a>
              <span
                onClick={handleOpenScreenShot}
                className="flex items-center gap-2 p-3 shadow-md shadow-black hover:scale-110 duration-300 ease-in cursor-pointer rounded-md"
              >
                Screenshots
                <MdOutlineScreenshotMonitor size={20} />
              </span>
            </div>
          </div>
          <div
            className="md:p-4 px-3 mb-28 p-2 md:px-6 shadow-md rounded-md shadow-black md:text-start text-center md:w-fit w-full"
            data-aos="flip-right"
            data-aos-delay="300"
          >
            <h3 className="text-lg md:text-2xl font-bold tracking-wide mb-5">
              Technologies
            </h3>
            <ul className="grid md:grid-cols-1 grid-cols-2">
              {techData.map((tech, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 mb-3 text-indigo-700 dark:text-primary"
                >
                  <MdRadioButtonChecked />

                  <span className="dark:text-light text-dark">{tech}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {openScreenShot && (
        <div>
          <ProjectScreenShot
            imgData={notesAppImgData}
            handleOpenScreenShot={handleOpenScreenShot}
          />
        </div>
      )}
    </div>
  );
}

export default NotesDetailsPage;
