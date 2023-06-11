import React from "react";
import { FiSearch } from "react-icons/fi";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiOutlineWhatsApp,
  AiOutlineSmile,
} from "react-icons/ai";
import {
  BsMessenger,
  BsTelegram,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const Header = () => {
  let fb = "14k",
    twt = "15.hk",
    msn = "73k",
    unkow = "8.2k",
    telegaram = "81.2k",
    wp = "12.9k",
    shares = "149k";
  return (
    <>
      <div className="w-4/5 m-auto flex flex-col justify-center items-center">
        <div className="flex flex-col items-center mt-8 md:mt-16">
          <img src="/Images/Logo.png" className="max-w-[100px]" />
          <h1 className="text-white font-bold text-4xl mt-4">Sflix</h1>
        </div>
        <div className="w-full mt-5 flex">
          <input
            className="w-11/12 h-[5vh] px-4 py-6 rounded-l-md outline-none focus:outline-none"
            placeholder="Enter Keywords..."
          />
          <div className="w-1/12 bg-[#00ACC1] h-[5vh] px-1 py-6 flex items-center justify-center rounded-r-md">
            <FiSearch />
          </div>
        </div>
        <div className="flex flex-wrap gap-5 mt-10">
          <div className="flex flex-col items-center ">
            <h1 className="text-[#555555] text-lg">{shares}</h1>
            <h1 className="block text-xs mt-[-6px] text-[#555555] ">Shares</h1>
          </div>

          <button className="flex items-center justify-center px-10 py-3  md:py-0 gap-2 text-white text-xs bg-[#3B5997] ">
            <AiFillFacebook className="text-white" />
            {fb}
          </button>
          <button className="flex items-center justify-center px-10 py-3  md:py-0 gap-2 text-white text-xs bg-[#4A90C7]">
            <AiFillTwitterSquare className="text-white" />
            {twt}
          </button>
          <button className="flex items-center justify-center px-10 py-3  md:py-0 gap-2 text-white text-xs bg-[#24AF5A]">
            <AiOutlineWhatsApp className="text-white" />
            {wp}
          </button>
          <button className="flex items-center justify-center px-10 py-3  md:py-0 gap-2 text-white text-xs bg-[#3C75D4] ">
            <BsMessenger className="text-white" />
            {msn}
          </button>
          <button className="flex items-center justify-center px-10 py-3  md:py-0 gap-2 text-white text-xs bg-[#D23E08]">
            <AiOutlineSmile className="text-white" />
            {unkow}
          </button>
          <button className="flex items-center justify-center px-10 py-3  md:py-0 gap-2 text-white text-xs bg-[#0673AB] ">
            <BsTelegram className="text-white" />
            {telegaram}
          </button>
        </div>
        <div className="flex gap-5 items-center bg-[#00ACC1] p-4 px-9 rounded-full mt-5">
          <h1 className="font-medium md:text-3xl text-white">View Full Site</h1>
          <BsFillArrowRightCircleFill className="text-white mt-2" />
        </div>
      </div>
    </>
  );
};

export default Header;
