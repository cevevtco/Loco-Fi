import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.svg";
import person from "../assets/person-fill.svg";
import { RiCloseLine } from "react-icons/ri";
import { HiOutlineMenu } from "react-icons/hi";

const Header = (props) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${searchTerm}`);
  };

  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const onClick = () => {
    setIsDropdownActive(!isDropdownActive);
  };

  return (
    <header className="relative w-full lg:h-[92px] bg-black">
      <nav className=" relative items-center  border-gray-200 px-4 lg:px-6 py-2.5  dark:bg-gray-800">
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
                className="flex items-center mt-1 mr-3 h-6 lg:h-8 "
                alt="Loco-Fi Logo"
              />
            </NavLink>

            <form onSubmit={handleSubmit} autoComplete="off">
              <label className="relative ml-28 hidden sm:block sm:w-60 md:w-96 lg:w-80 xl:w-[35rem]">
                <input
                  className="text-white placeholder:italic placeholder:text-[#777777] block bg-[#333232] w-full  rounded-full py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-slate-300 focus:ring-slate-300 focus:ring-1 sm:text-sm"
                  placeholder="Search for songs,artists,bands..."
                  type="text"
                  name="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span className="sr-only">Search</span>
                <span className="absolute cursor-pointer inset-y-0 right-5 flex items-center pl-2 ">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.6132 15.5158C18.7994 13.901 19.5 11.9073 19.5 9.75C19.5 4.36522 15.1348 0 9.75 0C4.36522 0 0 4.36522 0 9.75C0 15.1348 4.36522 19.5 9.75 19.5C11.9079 19.5 13.902 18.799 15.5171 17.6123L15.5158 17.6132C15.5601 17.6732 15.6093 17.7307 15.6636 17.785L21.4393 23.5607C22.0251 24.1465 22.9749 24.1465 23.5607 23.5607C24.1465 22.9749 24.1465 22.0251 23.5607 21.4393L17.785 15.6636C17.7307 15.6093 17.6732 15.5601 17.6132 15.5158ZM18 9.75C18 14.3063 14.3063 18 9.75 18C5.19365 18 1.5 14.3063 1.5 9.75C1.5 5.19365 5.19365 1.5 9.75 1.5C14.3063 1.5 18 5.19365 18 9.75Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </label>
              <span className="cursor-pointer absolute inset-y-0 right-24 top-5 flex items-center pl-2  sm:hidden">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.6132 15.5158C18.7994 13.901 19.5 11.9073 19.5 9.75C19.5 4.36522 15.1348 0 9.75 0C4.36522 0 0 4.36522 0 9.75C0 15.1348 4.36522 19.5 9.75 19.5C11.9079 19.5 13.902 18.799 15.5171 17.6123L15.5158 17.6132C15.5601 17.6732 15.6093 17.7307 15.6636 17.785L21.4393 23.5607C22.0251 24.1465 22.9749 24.1465 23.5607 23.5607C24.1465 22.9749 24.1465 22.0251 23.5607 21.4393L17.785 15.6636C17.7307 15.6093 17.6732 15.5601 17.6132 15.5158ZM18 9.75C18 14.3063 14.3063 18 9.75 18C5.19365 18 1.5 14.3063 1.5 9.75C1.5 5.19365 5.19365 1.5 9.75 1.5C14.3063 1.5 18 5.19365 18 9.75Z"
                    fill="white"
                  />
                </svg>
              </span>
            </form>
          </div>

          <div className=" absolute right-7  flex items-center   ">
            <NavLink
              to="/Login"
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
            </NavLink>
          </div>

          <button onClick={onClick} className="realtive mr-12 mt-2 lg:hidden ">
            <svg className="w-5 h-5 ">
              <path
                d="M3 9.5C2.17157 9.5 1.5 8.82843 1.5 8C1.5 7.17157 2.17157 6.5 3 6.5C3.82843 6.5 4.5 7.17157 4.5 8C4.5 8.82843 3.82843 9.5 3 9.5ZM8 9.5C7.17157 9.5 6.5 8.82843 6.5 8C6.5 7.17157 7.17157 6.5 8 6.5C8.82843 6.5 9.5 7.17157 9.5 8C9.5 8.82843 8.82843 9.5 8 9.5ZM13 9.5C12.1716 9.5 11.5 8.82843 11.5 8C11.5 7.17157 12.1716 6.5 13 6.5C13.8284 6.5 14.5 7.17157 14.5 8C14.5 8.82843 13.8284 9.5 13 9.5Z"
                className="fill-white"
              ></path>
            </svg>
          </button>

          <div
            className="relaitve hidden justify-between items-center  w-full lg:flex lg:w-auto "
            id="mobile-menu-2"
          >
            <ul className="absolute right-40 flex  flex-col  font-sm lg:flex-row lg:space-x-8 ">
              <li>
                <NavLink
                  to="/Discover"
                  className="block py-2 pr-4 pl-3 text-white hover:text-gray-400 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  Explore
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/Contactus"
                  className=" block py-2 pr-4 pl-3 text-white border-b hover:text-gray-400 border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Signup"
                  className="block py-2 pr-4 pl-3 text-white border-b hover:text-gray-400 border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Sign up
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* DropDown menu */}

      <div
        className={`absolute top-[4.5rem] h-screen w-screen
        bg-gradient-to-b from-white/10 to-from-slate-800
        backdrop-blur-lg z-10   smooth-transition  lg:hidden center   border-gray-200 px-4 lg:px-6 py-2.5  dark:bg-gray-800 
        ${isDropdownActive ? "opacity-100 z-50" : "opacity-0 -z-50"}`}
      >
        <ul className="text-center   leading-[5rem] font-bold text-2xl text-white ">
          <li className="">
            <NavLink
              to="/discover"
              onClick={onClick}
              className="hover:text-gray-400 transition-all duration-300
             "
              href="#"
            >
              Explore
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Contactus"
              onClick={onClick}
              className="hover:text-gray-400 transition-all duration-300"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Signup"
              onClick={onClick}
              className="hover:text-gray-400 transition-all duration-300"
            >
              Sign up
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
