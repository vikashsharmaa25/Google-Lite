import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/google-logo.png";
import SearchInput from "./SearchInput";
import { menu } from "../utils/Constants";
import { context } from "../utils/ContextApi";


function SearchResultHeader() {
  const [selectedMenu, setSelectedMenu] = useState("All");
  const { setImageSearch } = useContext(context);

  useEffect(() => {
    return () => setImageSearch(false);
  }, []);

  const clickHandler = (menuItem) => {
    let isTypeimage = menuItem.name === "image";
    setSelectedMenu(menuItem.name);
    setImageSearch(isTypeimage ? true : false);
  };
  return (
    <>
      <div className="p-[15px] pb-0 md:pr-5 md:pl-20 md:pt-7 border-b border-[#ebebeb] flex md:block flex-col items-center sticky top-0 bg-white">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center grow">
            <Link to="/">
              <img
                className="hidden md:block w-[92px] mr-10"
                src={logo}
                alt="Logo"
              />
            </Link>
            <SearchInput from="searchResult" />
          </div>
          
        </div>

        <div className="flex max-w-[1250px] mx-auto">
          {menu.map((menu, index) => (
            <span
              key={index}
              className={`flex items-center p-3 text-[#5f6368] cursor-pointer relative ${
                selectedMenu === menu.name ? "text-[#1a73e8]" : ""
              }`}
              onClick={() => clickHandler(menu)}
            >
              <span className="hidden md:block mr-2">{menu.icon}</span>
              <span className="text-sm">{menu.name}</span>
              {selectedMenu === menu.name && (
                <span className="h-[3px] w-[calc(100%-20px)] absolute bg-[#1a73e8] bottom-0 left-[10px]" />
              )}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default SearchResultHeader;
