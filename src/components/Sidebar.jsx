import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Tooltip, TooltipWrapper, TooltipProvider } from "react-tooltip";
import person from "../assets/person-fill.svg";
import "react-tooltip/dist/react-tooltip.css";

// import { logo } from "../assets";
import { links } from "../assets/constants";

const NavLinks = ({ handleClick }) => (
  // const NavLinks = ({裡面寫props 或是 直接打 props的名稱, Ex:handleClick})

  <div className="mt-10 z-30">
    {links.map((item) => {
      if (item.name === "Your Library") {
        return (
          <div key="item.name">
            <TooltipWrapper>
              <div
                // id={`${item.name}-tooltip`}
                // key={item.name}
                // to={item.to}
                className="cursor-pointer  flex flex-row justify-start items-center my-8 mb-4 text-md font-medium text-white hover:text-gray-400 dark:text-black  dark:hover:text-gray-500"
                onClick={() => handleClick && handleClick()}
              >
                <item.icon className="w-6 h-6 mr-2 " />
                {item.name}
              </div>
            </TooltipWrapper>
            {item.subLinks.map((subLink) => (
              <TooltipWrapper key={subLink.name}>
                <div
                  // to={subLink.to}
                  className="cursor-pointer flex flex-row justify-start items-center my-2 mx-8 text-sm font-medium text-gray-400 dark:text-gray-400 hover:text-white dark:hover:text-gray-300"
                >
                  {subLink.name}
                </div>
              </TooltipWrapper>
            ))}

            <Tooltip
              place="right"
              events={["click"]}
              // positionStrategy="fixed"
              // position="{x:-200;y:-200}"
              className="bg-[#fb923c] -ml-20  z-20  p-6 rounded-lg font-bold"
              clickable
            >
              <a className="flex  flex-col text-white">
                <h4 className="text-xl">Enjoy Your Library</h4>
                <p className="text-sm font-medium">
                  Log in to see saved songs, artists,
                </p>
                <p className="text-sm font-medium">
                  and playlists in Your Library.
                </p>
                <br />
              </a>
              <NavLink
                to="/Login"
                className="flex items-center justify-center text-black hover:bg-gray-200 active:bg-gray-300 font-medium rounded-full
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

              <button
                className="left-0 py-3  text-white hover:text-gray-200 hover:scale-110 transition-all active:text-gray-300 font-bold 
              text-sm  focus:outline-none dark:focus:ring-gray-800"
              >
                Not now
              </button>
            </Tooltip>
          </div>
        );
      }
      return (
        <NavLink
          key={item.name}
          to={item.to}
          className="flex flex-row justify-start items-center my-8 text-md font-medium text-white dark:text-black hover:text-gray-400 dark:hover:text-gray-500"
          onClick={() => handleClick && handleClick()}
          end
        >
          <item.icon className="w-6 h-6 mr-2 " />
          {item.name}
        </NavLink>
      );
    })}
  </div>
);

const Sidebar = (props) => {
  return (
    <>
      <TooltipProvider>
        <div className="md:flex hidden  flex-col w-[240px] py-10 px-4 bg-[rgb(16,16,16)] dark:bg-white font-['poppins']">
          <NavLinks />
        </div>
      </TooltipProvider>
      <div
        className={`absolute top-0 h-screen w-2/3
      bg-gradient-to-tl from-white/10 to-[#232322]
      backdrop-blur-lg dark:from-black/50 z-30 p-6 md:hidden smooth-transition
      ${props.isSidebarOpen ? "left-0" : "-left-full"}`}
      >
        <NavLinks handleClick={props.onNavClick} />
      </div>
    </>
  );
};

export default Sidebar;
