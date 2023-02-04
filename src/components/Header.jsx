import { useState } from "react";
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.svg";
import person from "../assets/person-fill.svg";
import { RiCloseLine } from "react-icons/ri";
import { HiOutlineMenu } from "react-icons/hi";

const Header = (props) => {
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const onClick = () => {
    setIsDropdownActive(!isDropdownActive);
  };

  return (
    <header className="relative">
      <nav className=" relative bg-black   border-gray-200 px-4 lg:px-6 py-2.5  dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center ml-3 mt-5 max-w-screen-xl">
          <div className="flex flex-row">
            <div className=" md:hidden mr-3 mt-1 block ">
              {props.isSidebarOpen ? (
                <RiCloseLine
                  className="w-6 h-6  text-white mr-2 hover:cursor-pointer"
                  // onClick 原本的公式是onClick={()=>{}}
                  onClick={props.onMenuClick}
                />
              ) : (
                <HiOutlineMenu
                  className="w-6 h-6  text-white mr-2 hover:cursor-pointer"
                  onClick={props.onMenuClick}
                />
              )}
            </div>
            <NavLink to="/">
              <img
                src={logo}
                className="flex items-center mt-1 mr-3 h-6 "
                alt="Loco-Fi Logo"
              />
            </NavLink>
          </div>
          <div className=" absolute right-7 mt-1 flex items-center lg:order-1  ">
            <a
              href="#"
              className="flex items-center  text-black hover:bg-gray-200 active:bg-gray-300 font-medium rounded-full
              text-sm px-2 lg:px-5 py-2 lg:py-2.5  bg-[#F5F5F5] focus:outline-none dark:focus:ring-gray-800 "
            >
              <span className="flex items-center  ">
                <img
                  className=" lg:pr-2 w-3 h-3 lg:w-5 lg:h-5"
                  src={person}
                  alt="log in"
                />
                <strong className="hidden  lg:inline">Log in</strong>
              </span>
            </a>
            {/* button */}

            {/* <div className="flex items-center lg:order-2">
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-white lg:hidden  focus:outline-none   dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 9.5C2.17157 9.5 1.5 8.82843 1.5 8C1.5 7.17157 2.17157 6.5 3 6.5C3.82843 6.5 4.5 7.17157 4.5 8C4.5 8.82843 3.82843 9.5 3 9.5ZM8 9.5C7.17157 9.5 6.5 8.82843 6.5 8C6.5 7.17157 7.17157 6.5 8 6.5C8.82843 6.5 9.5 7.17157 9.5 8C9.5 8.82843 8.82843 9.5 8 9.5ZM13 9.5C12.1716 9.5 11.5 8.82843 11.5 8C11.5 7.17157 12.1716 6.5 13 6.5C13.8284 6.5 14.5 7.17157 14.5 8C14.5 8.82843 13.8284 9.5 13 9.5Z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div> */}
          </div>
          <button onClick={onClick} className="realtive mr-12 mt-3 lg:hidden ">
            <svg className="w-5 h-5 ">
              <path
                d="M3 9.5C2.17157 9.5 1.5 8.82843 1.5 8C1.5 7.17157 2.17157 6.5 3 6.5C3.82843 6.5 4.5 7.17157 4.5 8C4.5 8.82843 3.82843 9.5 3 9.5ZM8 9.5C7.17157 9.5 6.5 8.82843 6.5 8C6.5 7.17157 7.17157 6.5 8 6.5C8.82843 6.5 9.5 7.17157 9.5 8C9.5 8.82843 8.82843 9.5 8 9.5ZM13 9.5C12.1716 9.5 11.5 8.82843 11.5 8C11.5 7.17157 12.1716 6.5 13 6.5C13.8284 6.5 14.5 7.17157 14.5 8C14.5 8.82843 13.8284 9.5 13 9.5Z"
                className="fill-white"
              ></path>
            </svg>
          </button>
          <div
            className="relaitve hidden justify-between items-center mt-1 w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="absolute right-40 flex  flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white hover:text-gray-400 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  Explore
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white border-b hover:text-gray-400 border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white border-b hover:text-gray-400 border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* DropDown menu */}

      <div
        className={`   absolute top-[4.6rem] h-screen w-screen
        bg-gradient-to-b from-white/10 to-from-slate-800
        backdrop-blur-lg z-10   smooth-transition  lg:hidden center   border-gray-200 px-4 lg:px-6 py-2.5  dark:bg-gray-800 
        ${isDropdownActive ? "opacity-100 z-50" : "opacity-0 -z-50"}`}
      >
        <ul className="text-center   leading-[5rem] font-bold text-2xl text-white ">
          <li className="">
            <a className="hover:text-gray-400" href="#">
              Explore
            </a>
          </li>

          <li>
            <a className="hover:text-gray-400" href="#">
              Contact
            </a>
          </li>
          <li>
            <a className="hover:text-gray-400" href="#">
              Sign up
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
