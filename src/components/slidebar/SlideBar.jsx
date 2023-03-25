import { MdClose } from "react-icons/md";
import SlideBarSection from "../slidebar/SlideBarSection";

function SlideBar({ openMobileMenu, handleOpenMobileMenu }) {
  return (
    <div
      className={
        openMobileMenu
          ? "fixed h-full w-full top-0 left-0 bg-black/20 dark:bg-gray-500/10 backdrop-blur md:hidden"
          : " "
      }
    >
      <div
        className={
          openMobileMenu
            ? "fixed top-0 left-0 h-full w-[75%] bg-[#e1e5f2] dark:bg-dark p-5 shadow-xl shadow-gray-500 dark:shadow-secondary duration-500 ease-in"
            : "fixed top-0 left-[-100%] h-full w-[75%] bg-[#e1e5f2] dark:bg-dark p-5 shadow-xl shadow-gray-500 dark:shadow-secondary duration-500 ease-in"
        }
      >
        <div className="flex items-center justify-between">
          <h1 className=" font-signatureFont text-3xl mt-2 tracking-wide bg-gradient-to-r dark:from-secondary from-indigo-800 to-blue-600 dark:to-primary p-2 text-transparent bg-clip-text">
            Marvinel
          </h1>

          <div
            onClick={handleOpenMobileMenu}
            className="shadow-md shadow-gray-500 dark:shadow-secondary p-1 rounded-full"
          >
            <MdClose size={20} />
          </div>
        </div>
        <SlideBarSection handleOpenMobileMenu={handleOpenMobileMenu} />
      </div>
    </div>
  );
}

export default SlideBar;
