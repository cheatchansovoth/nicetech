import React, { useContext, useState } from "react";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import ThemeContext from "./context/ThemeContext";
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "./ShoppingCart";
import { auth, GoogleAuth } from "./Authentication/Firebase";

export const Topbar = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const handleOnClick = () => {
    setIsDark(!isDark);
  };
  const [iseCartDisplay, setIsCartDisplay] = useState(false);

  const handleCartDisplay = () => {
    setIsCartDisplay(!iseCartDisplay);
  };
  const { user, setUser, setIsLoggin } = useContext(ThemeContext);
  function switchChange() {
    return (
      <div
        className={
          isDark
            ? "flex md:w-20 h-10 bg-white  rounded-full duration-500 "
            : "flex md:w-20 h-10 bg-gray-600 rounded-full duration-500 "
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
  const navigate = useNavigate();
  const handleChangePage = (route) => {
    navigate(route);
  };
  return (
    <div className="w-screen">
      <div className="w-[90%] mx-auto py-3 flex justify-between">
        <h1
          className="text-4xl font-bold font-sans cursor-pointer"
          onClick={() => {
            handleChangePage("/");
          }}
        >
          NiceTech
        </h1>
        <div className="w-[50%] hidden md:flex justify-center items-center">
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
        {user && user.displayName ? (
          <div className="hidden md:flex cursor-pointer">
            <BsPerson className="text-5xl" />
            <div>
              <span>{user.displayName}</span>
              <p
                onClick={() => {
                  setUser("");
                  setIsLoggin(false);
                  auth.signOut();
                }}
              >
                SignOut
              </p>
            </div>
          </div>
        ) : (
          <div
            className="hidden md:flex cursor-pointer"
            onClick={() => handleChangePage("/login")}
          >
            <BsPerson className="text-5xl" />
            <div>
              <p>Sign In</p>
              <p>Account</p>
            </div>
          </div>
        )}

        <div
          className=" md:flex md:hidden cursor-pointer"
          onClick={() => handleChangePage("/login")}
        >
          <BsPerson className="text-5xl" />
        </div>
        <div className="md:block">
          <span
            className="text-5xl hidden md:block md:text-5xl cursor-pointer"
            onClick={handleCartDisplay}
          >
            <AiOutlineShoppingCart />
          </span>
        </div>
        <div className="md:block">
          <span className="text-5xl  md:hidden md:text-5xl cursor-pointer">
            <AiOutlineShoppingCart />
          </span>
        </div>
        <div>{switchChange()}</div>
      </div>
      <div className="w-[100%] hidden justify-center md:hidden">
        {/* <span className="text-xl">
          <GiHamburgerMenu />
        </span> */}
        <input
          type="text"
          className="w-screen rounded-md bg-gray-200 py-2 text-black placeholder:text-black md:placeholder:text-xl placeholder:text-center "
          style={{ paddingLeft: "30px" }}
          placeholder="Search for products"
        ></input>
      </div>
      {iseCartDisplay && <ShoppingCart />}
    </div>
  );
};
