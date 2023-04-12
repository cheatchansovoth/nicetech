import React, { useContext, useState } from "react";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from "react-icons/ai";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import ThemeContext from "./context/ThemeContext";
export const Topbar = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const handleOnClick = () => {
    setIsDark(!isDark);
  };
  function switchChange() {
    return (
      <div
        className={
          isDark
            ? "flex w-20 h-10 bg-white  rounded-full duration-500 "
            : "flex w-20 h-10 bg-gray-600 rounded-full duration-500 "
        }
      >
        <span
          className={
            isDark
              ? "h-10 w-10  bg-slate-400 rounded-full flex  justify-center items-center ml-10 duration-500"
              : "h-10 w-10  bg-gray-700 rounded-full flex justify-center items-center duration-500"
          }
        >
          <p
            onClick={handleOnClick}
            className={isDark ? "text-2xl  text-black" : "text-2xl text-white"}
          >
            {isDark ? <MdDarkMode /> : <MdOutlineDarkMode />}
          </p>
        </span>
      </div>
    );
  }
  return (
    <div className="w-screen">
      <div className="w-[90%] mx-auto py-3 flex justify-between">
        <h1 className="text-4xl font-bold font-sans">NiceTech</h1>
        <div className="w-[50%] flex justify-center items-center">
          <input
            type="text"
            className="w-2/3 rounded-full bg-gray-200 py-2 text-black placeholder:text-black placeholder:text-xl "
            style={{ paddingLeft: "30px" }}
            placeholder="Search for products"
          ></input>

          <button className="bg-blue-600 rounded-full px-6 py-2 hover:to-blue-500">
            <span className="text-3xl">
              <AiOutlineSearch />
            </span>
          </button>
        </div>
        <div className="flex">
          <BsPerson className="text-5xl" />
          <div>
            <p>Sign In</p>
            <p>Account</p>
          </div>
        </div>
        <div>
          <span className="text-5xl">
            <AiOutlineShoppingCart />
          </span>
        </div>
        <div>
          <span className="text-5xl">
            <AiOutlineHeart />
          </span>
        </div>
        <div>{switchChange()}</div>
      </div>
    </div>
  );
};
