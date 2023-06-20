import React from "react";
import HomeHeader from "./HomeHeader";
import google from "../assets/google-logo.png";
import Footer from "./Footer";
import SearchInput from "./SearchInput";

function Home() {
  return (
    <>
      <div className="flex flex-col h-[100vh]">
        <HomeHeader />
        <main className=" grow ">
          <div className="flex flex-col justify-center items-center p-2 mt-40">
            <div className="md:w-fit w-[172px]">
              <img src={google} alt="Google" />
            </div>
            <SearchInput />
            <div className="flex gap-2 mt-3 flex-wrap justify-center">
              <button
                className="hover:shadow bg-gray-100 md:py-2 py-1 px-4 md:text-[16px] text-[10px] rounded-md"
              >
                Google Search
              </button>
              <button className="hover:shadow bg-gray-100 md:py-2 py-1 px-4 md:text-[16px] text-[10px] rounded-md">
                I'm Feeling lucky
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Home;
