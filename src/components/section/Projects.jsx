import ProjectsCards from "../cards/ProjectsCards";
import Text from "../reusable_text/Text";

function Projects() {
  return (
    <div className="dark:text-light text-dark min-h-screen w-full pb-10 mt-28 md:mt-64">
      <div className="w-full h-full max-w-6xl mx-auto flex justify-center flex-col px-7 lg:px-3">
        <h1 className="text-2xl md:text-4xl font-extrabold tracking-wide mb-5 text-center md:text-start">
          <Text>PROJECTS</Text>
        </h1>
        <div>
          <h2 className=" md:mb-5 tracking-wide md:text-xl dark:font-extralight font-normal md:text-start text-center">
            Check out some of my Self/Own Projects right here.
          </h2>

          {/* Projects Cards */}
          <ProjectsCards />
        </div>
      </div>
    </div>
  );
}

export default Projects;
