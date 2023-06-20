import React from "react";
import { TbGridDots } from "react-icons/tb";

function HomeHeader() {
  return (
    <>
      <div className="flex flex-row gap-x-4 text-[18px] justify-end items-center px-4 py-1">
        <p className="text-gray-700 text-[16px]">Gmail</p>
        <p className="text-gray-700 text-[16px]">Image</p>
        <TbGridDots />
      </div>
    </>
  );
}

export default HomeHeader;
