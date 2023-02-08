import React from "react";

const Contactus = () => {
  return (
    <>
      <div className=" w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10 ">
        <h2 className="text-white font-bold text-3xl mt-8 ">Contact Us</h2>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8 animate-slideup">
        <div className="flex flex-col  justify-center items-center w-[320px] h-[320px]   bg-gray-900 rounded-md">
          <div className="flex flex-col items-center transition duration-300 ease-in-out hover:scale-125">
            <svg
              width="50"
              height="50"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.88477 0.511076C2.62689 -0.231039 3.85149 -0.154797 4.49583 0.673634L6.28954 2.97983C6.6187 3.40304 6.73502 3.95409 6.60498 4.47423L6.05772 6.66329C5.99994 6.8944 6.06766 7.13888 6.2361 7.30732L8.69268 9.7639C8.86113 9.93235 9.1056 10.0001 9.33671 9.94229L11.5258 9.39502C12.0459 9.26499 12.597 9.3813 13.0202 9.71047L15.3264 11.5042C16.1548 12.1485 16.231 13.3731 15.4889 14.1152L14.455 15.1492C13.7153 15.8889 12.6089 16.2137 11.5778 15.8512C9.01754 14.9511 6.61438 13.4774 4.56849 11.4315C2.5226 9.38562 1.04895 6.98246 0.148838 4.42225C-0.213682 3.39112 0.11113 2.28472 0.85085 1.545L1.88477 0.511076Z"
                fill="white"
              />
            </svg>
            <h3 className="text-white font-bold pt-5">+886-2-22222222</h3>
          </div>
        </div>

        <div className="w-[320px] h-[320px]  flex flex-col  justify-center items-center  bg-gray-900  rounded-md">
          <div className="flex flex-col items-center transition duration-300 ease-in-out hover:scale-125">
            <svg
              width="50"
              height="50"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 2C3 0.89543 3.89543 0 5 0H11C12.1046 0 13 0.895431 13 2V14C13 15.1046 12.1046 16 11 16H5C3.89543 16 3 15.1046 3 14V2ZM9 13C9 12.4477 8.55228 12 8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14C8.55228 14 9 13.5523 9 13Z"
                fill="white"
              />
            </svg>

            <h3 className="text-white font-bold pt-5">0922-222-222</h3>
          </div>
        </div>
        <div className=" w-[320px] h-[320px]  flex flex-col  justify-center items-center   bg-gray-900 rounded-md  ">
          <div className="flex flex-col items-center transition duration-300 ease-in-out hover:scale-125">
            <svg
              width="50"
              height="50"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.0495854 3.55544C0.25173 2.66484 1.04822 2 2 2H14C14.9518 2 15.7483 2.66484 15.9504 3.55544L8 8.41403L0.0495854 3.55544ZM0 4.69708V11.8006L5.80319 8.24348L0 4.69708ZM6.7614 8.82905L0.191871 12.8559C0.512604 13.5323 1.20168 14 2 14H14C14.7983 14 15.4874 13.5323 15.8081 12.8559L9.2386 8.82905L8 9.58597L6.7614 8.82905ZM10.1968 8.24348L16 11.8006V4.69708L10.1968 8.24348Z"
                fill="white"
              />
            </svg>

            <h3 className="text-white font-bold pt-5">z@gmail.com</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
