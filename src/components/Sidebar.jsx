import { useState } from "react";
import { NavLink } from "react-router-dom";

// import { logo } from "../assets";
import { links } from "../assets/constants";

const NavLinks = ({ handleClick }) => (
  // const NavLinks = ({裡面寫props 或是 直接打 props的名稱, Ex:handleClick})
  <div className="mt-10">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="flex flex-row justify-start items-center my-8 text-sm font-medium text-white hover:text-gray-400"
        onClick={() => handleClick && handleClick()}
        end
      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = (props) => {
  return (
    <>
      <div className="md:flex hidden  flex-col w-[240px] py-10 px-4 bg-[#15131d]">
        <NavLinks />
      </div>

      <div
        className={`absolute top-0 h-screen w-2/3
      bg-gradient-to-tl from-white/10 to-[#232322]
      backdrop-blur-lg z-10 p-6 md:hidden smooth-transition
      ${props.isSidebarOpen ? "left-0" : "-left-full"}`}
      >
        <NavLinks handleClick={props.onNavClick} />
      </div>
    </>
  );
};

export default Sidebar;
