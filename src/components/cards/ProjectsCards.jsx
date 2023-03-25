import { ProjectsData } from "../../data/ProjectData";

function ProjectsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
      {ProjectsData.map((data, index) => (
        <div
          key={index}
          className="group mb-5 hover:scale-105 duration-300 relative p-5 hover:shadow-none shadow-md shadow-gray-700 dark:shadow-primary rounded-lg cursor-pointer hover:bg-gradient-to-r from-indigo-800 to-blue-700"
        >
          <img
            src={data.appImage}
            alt="app-image"
            className="md:w-[500px] group-hover:opacity-20"
          />

          <div className="absolute top-0 left-0 h-full w-full hidden group-hover:flex justify-center items-center">
            <div className="flex flex-col gap-5 justify-center items-center">
              <h1 className="text-lg md:text-2xl text-center font-extrabold uppercase text-white">
                {data.title}
              </h1>
              <h2 className="md:text-xl text-white font-extrabold">
                {data.tech}
              </h2>
              <span className="p-3 px-8 md:px-16 rounded-lg text-light bg-blue-700 hover:bg-blue-500">
                More Info
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectsCards;
