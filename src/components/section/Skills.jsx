import Text from "../reusable_text/Text";
import SkillsTechCards from "../cards/SkillsTechCards";

function Skills() {
  return (
    <div className="dark:text-light text-dark min-h-screen w-full pb-10 mt-28 md:mt-32">
      <div className="w-full h-full max-w-6xl mx-auto flex justify-center flex-col px-7 lg:px-3">
        <h1 className="text-2xl md:text-4xl font-extrabold tracking-wide mb-5 text-center md:text-start">
          <Text>SKILLS</Text>
        </h1>
        <div>
          <h2 className=" md:mb-5 tracking-wide md:text-xl font-light dark:font-extralight md:text-start text-center">
            These are the Technologies I've worked with
          </h2>

          {/* CARDS LIST */}
          <SkillsTechCards />
        </div>
      </div>
    </div>
  );
}

export default Skills;
