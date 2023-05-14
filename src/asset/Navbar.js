import React, { useState } from "react";
import Logo from "../starter-code/assets/shared/logo.svg";
import Hamburger from "../starter-code/assets/shared/icon-hamburger.svg";
import { NavLink, useLocation } from "react-router-dom";
import Close from "../starter-code/assets/shared/icon-close.svg";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleClick = () => setOpenMenu(!openMenu);
  const location = useLocation();

  const menuClass = openMenu ? "mobileMenu" : "mobileMenu translate-x-full";
  const handleLinkClick = () => setOpenMenu(false);
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div classname="navbar ">
      <div className="flex justify-between items-center w-full p-6 absolute top-0 left-0  desktop:px-16  desktop:my-8">
        <div className="flex justify-center items-center">
          <NavLink to="/" onClick={handleLinkClick}>
            <img src={Logo} alt="" className="h-10" />
          </NavLink>
          <hr className="hidden desktop:w-473px desktop:flex desktop:opacity-25 desktop:ml-8 " />
        </div>
        <button onClick={handleClick}>
          <img src={Hamburger} alt="" className="h-6 tablet:hidden" />
        </button>
      </div>

      <nav
        className={`${menuClass} fixed h-screen w-4/6 top-0 right-0 text-white backdrop-blur-lg text-left p-6  duration-700 tablet:-translate-x-0 tablet:h-auto tablet:px-4 tablet:py-0 tablet:w-3/5 tablet:bg-grey   desktop:absolute  desktop:my-8  `}
      >
        <div className="flex justify-end">
          <button onClick={handleClick}>
            <img src={Close} alt="" className="tablet:hidden" />
          </button>
        </div>

        <ul className="my-16 font-BarlowCondensed font-normal text-base tablet:flex tablet:justify-between  tablet:m-0 tablet:px-6 tablet:text-ssm desktop:justify-center desktop:gap-16">
          <NavLink
            to="/"
            onClick={handleLinkClick}
            className={
              window.location.pathname === "/" ? "border-b-2 pb-1" : ""
            }
          >
            <li className="my-6 tracking-widest uppercase hover:underline tablet:hover:no-underline">
              <span className="font-bold mr-2 tablet:hidden desktop:inline-block">
                00
              </span>
              Home
            </li>
          </NavLink>
          <NavLink
            to="/Destination"
            onClick={handleLinkClick}
            className={
              window.location.pathname === "/Destination"
                ? "border-b-2 pb-1"
                : ""
            }
          >
            <li className="my-6 tracking-widest uppercase  hover:underline  tablet:hover:no-underline">
              <span className="font-bold mr-2 tablet:hidden desktop:inline-block">
                01
              </span>
              Destination
            </li>
          </NavLink>

          <NavLink
            to="/Crew"
            onClick={handleLinkClick}
            className={
              window.location.pathname === "/Crew" ? "border-b-2 pb-1" : ""
            }
          >
            <li className="my-6 tracking-widest uppercase  hover:underline  tablet:hover:no-underline">
              <span className="font-bold mr-2 tablet:hidden desktop:inline-block">
                02{" "}
              </span>
              Crew
            </li>
          </NavLink>
          <NavLink
            to="/Technology"
            onClick={handleLinkClick}
            className={
              window.location.pathname === "/Technology"
                ? "border-b-2 pb-1"
                : ""
            }
          >
            <li className="my-6 tracking-widest uppercase  hover:underline  tablet:hover:no-underline">
              <span className="font-bold mr-2 tablet:hidden desktop:inline-block">
                03{" "}
              </span>
              Technology
            </li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
