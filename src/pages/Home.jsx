import React from "react";
import { Link } from "react-router-dom";
import clayBanks from "../assets/img/Home/header/clay-banks.jpg";

const Home = () => {
  return (
    <div>
      <div className="relative h-full m-0 ">
        <img className="opacity-75" src={clayBanks} alt="background pic" />

        <div className="text-left absolute top-[2rem] left-[2rem] sm:top-[6rem]  md:top-[6rem] lg:top-[6rem] xl:top-[8rem] ">
          <p className="text-[#E5C19F] text-sm sm:text-base md:text-lg lg:text-xl  font-bold  ">
            # Music from Across the globe
          </p>
          <p className="text-white font-extrabold  text-xl sm:text-2xl md:text-3xl lg:text-5xl my-1    ">
            Your favorite music.
          </p>
          <p className="text-white font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-5xl my-1  ">
            Artists to discover.
          </p>
          <p className="text-white font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-5xl my-1   ">
            And more in Loco-Fi
          </p>
          <Link to="/Discover">
            <button
              className=" text-xs w-[10rem] h-[1.5rem] lg:text-xl font-bold  lg:mt-5  lg:w-96 lg:h-14 bg-gradient-to-r from-[#88D3CE] to-[#6E45E2]  
          hover:from-[#6E45E2] hover:to-[#88D3CE] opacity-80 rounded-full hover:opacity-100 text-white active:bg-violet-700"
            >
              Discover
            </button>
          </Link>
        </div>
        <div className="flex flex-col">
          <div className="w-full flex justify-between  sm:flex-row flex-col mt-4 mb-10 bg-[#1F1E1E]">
            <h2 className="font-bold text-3xl text-white text-left">
              New releases
              <p className="text-[#E5C19F] text-sm">
                New songs to listen and enjoy
              </p>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
