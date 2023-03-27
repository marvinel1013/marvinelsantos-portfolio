import { useState, useEffect } from "react";
import { NavLinks } from "../../data/ProjectData";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-scroll";
import SlideBar from "../slidebar/SlideBar.jsx";

function NavBar() {
  //mobile menu STATE
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  //NavBar Shadow STATE
  const [navShadow, setNavShadow] = useState(false);

  //toggle openMobileMenu Function
  const handleOpenMobileMenu = () => {
    setOpenMobileMenu((prevState) => !prevState);
  };

  useEffect(() => {
    const shadow = () => {
      if (window.scrollY >= 90) {
        setNavShadow(true);
      } else {
        setNavShadow(false);
      }
    };

    window.addEventListener("scroll", shadow);
  }, [navShadow]);

  return (
    <div
      className={`fixed z-20 h-16 md:h-20 w-full dark:text-light text-dark dark:bg-dark bg-[#e1e5f2] px-5 md:px-10 ${
        navShadow ? "shadow-md dark:shadow-primary shadow-gray-400" : " "
      }  `}
    >
      <div className="w-full h-full flex items-center justify-between">
        <div className=" font-signatureFont cursor-pointer text-4xl md:text-5xl bg-gradient-to-r dark:from-secondary from-indigo-800 to-blue-600 dark:to-primary pt-2 pr-2 text-transparent bg-clip-text">
          <Link to="home" duration={800} smooth={true}>
            Marvinel
          </Link>
        </div>

        <ul className="hidden md:flex gap-5">
          {NavLinks.map((link, index) => (
            <Link key={index} to={link} smooth={true} duration={500}>
              <li className="capitalize tracking-wider cursor-pointer dark:text-light text-indigo-500 font-light hover:text-indigo-500 dark:hover:text-primary duration-300 ease-in-out">
                {link}
              </li>
            </Link>
          ))}
        </ul>
        {/* Menu Icon */}
        <div
          onClick={handleOpenMobileMenu}
          className="md:hidden cursor-pointer text-indigo-500"
        >
          <RxHamburgerMenu size={27} />
        </div>
      </div>

      {/* Mobile Menu Section */}
      <SlideBar
        openMobileMenu={openMobileMenu}
        handleOpenMobileMenu={handleOpenMobileMenu}
      />
    </div>
  );
}

export default NavBar;
