import React from "react";
import { Link } from "react-router-dom";
import clayBanks from "../assets/img/Home/header/clay-banks.jpg";
import { useDispatch, useSelector } from "react-redux";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Error, Loader, SongCard } from "../components";
import scrollbarHide from "tailwind-scrollbar-hide";

import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const Home = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopChartsQuery();

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const slideLeft2 = () => {
    var slider = document.getElementById("slider2");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight2 = () => {
    var slider = document.getElementById("slider2");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  if (isFetching) return <Loader title="Loading songs..." />;

  if (error) return <Error />;

  return (
    <div>
      <div className="relative h-full w-100vh">
        <img
          className="opacity-75 w-full mt-10 lg:mt-0"
          src={clayBanks}
          alt="background pic"
        />

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

        <div className="relative  flex  items-center mt-12 ">
          <div className=" w-full flex   top-0  h-[570px] lg:h-[600px]  flex-col   bg-[#1F1E1E]  ">
            <h2 className="p-12 font-bold lg:text-3xl text-white text-left">
              New releases
              <p className="text-[#E5C19F] text-sm">
                New songs to listen and enjoy
              </p>
            </h2>
          </div>
          <MdChevronLeft
            onClick={slideLeft}
            className="text-black bg-white rounded-full onClick={slide} absolute left-0  z-50 opacity-50 hover:opacity-100 cursor-pointer"
            size={45}
          />
          <div
            id="slider"
            className=" absolute items-center lg:mb-45 flex w-full   gap-8  px-10  overflow-x-auto scroll  scroll-smooth whitespace-nowrap 
            scrollbar-hide"
          >
            {data
              .slice(0, 13)
              ?.map(
                (song, i) =>
                  song.images?.coverart !== undefined && (
                    <SongCard
                      key={song.key}
                      song={song}
                      isPlaying={isPlaying}
                      activeSong={activeSong}
                      data={data}
                      i={i}
                    />
                  )
              )}
          </div>
          <MdChevronRight
            onClick={slideRight}
            className="text-black bg-white rounded-full onClick={slide} absolute right-0  z-50 opacity-50 hover:opacity-100 cursor-pointer"
            size={45}
          />
        </div>
        <div className="relative h-[570px] lg:h-[600px] mt-12 flex  items-center bg-[#1F1E1E]  ">
          <div className="w-full flex  absolute top-0  flex-col  mb-10 ">
            <h2 className="p-12 font-bold lg:text-3xl text-white text-left">
              Featured
              <p className="text-[#E5C19F] text-sm">
                Listen to music and stay happy
              </p>
            </h2>
          </div>
          <MdChevronLeft
            onClick={slideLeft2}
            className="text-black bg-white rounded-full onClick={slide} absolute left-0  z-50 opacity-50 hover:opacity-100 cursor-pointer"
            size={45}
          />
          <div
            id="slider2"
            className=" absolute items-center lg:mb-45 flex w-full   gap-8  px-10  overflow-x-auto scroll  scroll-smooth whitespace-nowrap 
            scrollbar-hide"
          >
            {data
              .slice(27, 40)
              ?.map(
                (song, i) =>
                  song.images?.coverart !== undefined && (
                    <SongCard
                      key={song.key}
                      song={song}
                      isPlaying={isPlaying}
                      activeSong={activeSong}
                      data={data}
                      i={i}
                    />
                  )
              )}
          </div>
          <MdChevronRight
            onClick={slideRight2}
            className="text-black bg-white rounded-full onClick={slide} absolute right-0  z-50 opacity-50 hover:opacity-100 cursor-pointer"
            size={45}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
