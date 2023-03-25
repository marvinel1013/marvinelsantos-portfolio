import { MdKeyboardDoubleArrowUp, MdOutlineMail } from "react-icons/md";
import {
  BsFillPersonLinesFill,
  BsFillSunFill,
  BsFillMoonStarsFill,
} from "react-icons/bs";
import { Link } from "react-scroll";

function MiniMenuBar({ handleToggleDarkmode, darkMode }) {
  return (
    <div className="flex items-center justify-center">
      <div className="text-lg md:text-2xl text-indigo-800 dark:text-gray-500 flex items-center gap-4 p-3 justify-center rounded-full bg-blue-900/40 dark:bg-blue-700/5 backdrop-blur-md fixed bottom-5">
        <Link to="home" duration={500} smooth={true}>
          <div className="p-2.5 md:p-3.5 rounded-full bg-blue-900/40 shadow-inner shadow-black hover:bg-blue-700/70 dark:hover:bg-blue-900/80 cursor-pointer duration-300 ease-in">
            <MdKeyboardDoubleArrowUp />
          </div>
        </Link>
        <div className="p-2.5 md:p-3.5 rounded-full bg-blue-900/40 shadow-inner shadow-black hover:bg-blue-700/70 dark:hover:bg-blue-900/80 cursor-pointer duration-300 ease-in">
          <MdOutlineMail />
        </div>
        <div className="p-2.5 md:p-3.5 rounded-full bg-blue-900/40 shadow-inner shadow-black hover:bg-blue-700/70 dark:hover:bg-blue-900/80 cursor-pointer duration-300 ease-in">
          <BsFillPersonLinesFill />
        </div>

        <div
          onClick={handleToggleDarkmode}
          className="p-2.5 md:p-3.5 rounded-full bg-blue-900/40 shadow-inner shadow-black hover:bg-blue-700/70 dark:hover:bg-blue-900/80 cursor-pointer duration-300 ease-in"
        >
          {darkMode ? (
            <BsFillSunFill className="text-amber-400" />
          ) : (
            <BsFillMoonStarsFill className="text-black" />
          )}
        </div>
      </div>
    </div>
  );
}

export default MiniMenuBar;
