import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import { BiUpArrowAlt } from "react-icons/bi";

// useLocation 是 react-router-dom寫好的一個hook

import {
  Header,
  Footer,
  Searchbar,
  Sidebar,
  MusicPlayer,
  TopPlay,
} from "./components";

import {
  Home,
  Contactus,
  PrivacyPolicy,
  Login,
  Signup,
  AboutUs,
  ForgetPassword,
  ArtistDetails,
  TopArtists,
  AroundYou,
  Discover,
  Search,
  SongDetails,
  TopCharts,
} from "./pages";

const App = () => {
  const { activeSong } = useSelector((state) => state.player);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // 創建 useRef 勾住 72 行的 "div 對象"
  const contentDiv = useRef(null);

  // 創建 useState 預設為 false, 當 isScrollToTopActive 為 true, ScrollToTop button 顯示
  const [isScrollToTopActive, setScrollToTopActive] = useState(false);

  // 當 72 行的 div scroll 的時候, 判斷 isScrollToTopActive 要設為 true/false
  const onScroll = (e) => {
    setScrollToTopActive(e.target.scrollTop > 300);
    // console.log(e.target.scrollTop);
  };

  // 當 ScrollToTop button 點選時, 被 useRef 勾住的 "div" scoll 到 top: 0
  const scrollToTop = () => {
    contentDiv.current.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* sidebarOpen */}
      {/* isSidebarOpen-->property要設在Components (例如：header,Sidebar下才能使用props */}

      {/* onMenuClick */}
      <Header
        isSidebarOpen={sidebarOpen}
        /* isSidebarOpen是props，sidebarOpen是state，使用prop = { state } */
        onMenuClick={() => {
          setSidebarOpen(!sidebarOpen);
        }}
        // onMenuClick是props，設定arrow function 之後帶到Header.jsx的onClick加入功能
      />
      <div className="relative flex ">
        <Sidebar
          isSidebarOpen={sidebarOpen}
          onNavClick={() => {
            setSidebarOpen(!sidebarOpen);
          }}
        />
        <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#000000]">
          <Searchbar />
          {/* 增加 ref={contentDiv} 來勾著這個 div, 增加 onScroll={onScroll} 當滑動 div 會觸發上面的 onScroll function*/}
          <div
            ref={contentDiv}
            onScroll={onScroll}
            className=" px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex "
          >
            <div
              className="flex-1 h-fit pb-40"

              // <div
              // className={`flex-1 h-fit ${
              //   location.pathname !== "/" ? "pb-40" : ""
              // }`}

              // ${ 接Js 的語法 }
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/discover" element={<Discover />} />
                <Route path="/top-artists" element={<TopArtists />} />
                <Route path="/top-charts" element={<TopCharts />} />
                <Route path="/around-you" element={<AroundYou />} />
                <Route path="/artists/:id" element={<ArtistDetails />} />
                <Route path="/songs/:songid" element={<SongDetails />} />
                <Route path="/search/:searchTerm" element={<Search />} />
                <Route path="/Contactus" element={<Contactus />} />
                <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/AboutUs" element={<AboutUs />} />
                <Route path="/ForgetPassword" element={<ForgetPassword />} />
              </Routes>
              <Footer />
            </div>
            <div className="xl:sticky relative top-0 h-fit">
              {/* <TopPlay /> */}
            </div>
          </div>
        </div>

        {activeSong?.title && (
          <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#3f3f3f] backdrop-blur-lg rounded-t-3xl z-10">
            <MusicPlayer />
          </div>
        )}
      </div>
      <div className="fixed bottom-2 right-2 animate-bounce">
        {/* 增加 onClick={scrollToTop} 點選時會觸發上方的 scrollToTop function*/}
        <button
          // type="button"
          onClick={scrollToTop}
          // 當 isScrollToTopActive = true 不透明度設為 75, isScrollToTopActive = false 不透明度設為 0
          className={`" inline-flex items-center p-3 rounded-full shadow-sm text-white bg-gray-500 transition-opacity hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          ${isScrollToTopActive ? "opacity-75" : "opacity-0"}`}
        >
          <BiUpArrowAlt className="h-6 w-6 " aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default App;
