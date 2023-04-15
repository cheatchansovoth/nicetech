import React from "react";
import { FcGoogle } from "react-icons/fc";
export const Register = () => {
  return (
    <div className="w-screen md:w-[90%] mx-auto">
      <div className="grid grid-cols-4 grid-rows-2 gap-4 ">
        <div className="col-span-4 md:col-span-3 row-span-2 bg-blue-400 rounded-xl">
          <div className="w-[100%] flex flex-col items-center justify-center min-h-[50vh]">
            <div>
              <h1 className="text-5xl font-bold">Sign Up</h1>
              <p className="font-semibold">
                Welcome back! Please enter your details
              </p>
              <div className="w-[100%] flex item-center items-center bg-white justify-center p-1 rounded-md shadow-black shadow-md">
                <span className="text-4xl">
                  <FcGoogle />
                </span>
                <button className="text-black text-xl font-semibold">
                  Sign Up with Google
                </button>
              </div>
              <div className="flex items-center my-3">
                <hr className="border-gray-400 border-1 w-full mr-4" />
                <span className="font-bold text-gray-600">OR</span>
                <hr className="border-gray-400 border-1 w-full ml-4" />
              </div>
              <form className="flex flex-col space-y-3">
                <input
                  className="p-2 placeholder:font-bold rounded-md"
                  placeholder="Username"
                ></input>
                <input
                  className="p-2 placeholder:font-bold rounded-md"
                  placeholder="Email"
                ></input>
                <input
                  className=" p-2 placeholder:font-bold rounded-md"
                  placeholder="Password"
                ></input>
                <input
                  className=" p-2 placeholder:font-bold rounded-md"
                  placeholder="Confirm Password"
                ></input>
                <div>
                  <input type="checkbox" />
                  <label className="text-blue-700">Agree with the term</label>
                </div>
                <button className="bg-blue-600 rounded-md px-6 py-2 hover:bg-blue-500">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-span-2 row-span-2 bg-blue-200 md:row-span-1 md:col-span-1 rounded-3xl">
          <div className="flex flex-col justify-center items-center my-[10%]">
            <h1 className="text-2xl font-semibold">Audionic Music</h1>
            <img
              src="https://cdn.shopify.com/s/files/1/0573/2309/4216/products/LosAngeles_SandGold_001.png?v=1650876856"
              alt="product1"
              className="w-[150px]"
            ></img>
            <p className="font-semibold">More magical than ever</p>
          </div>
        </div>
        <div className="col-span-2 row-span-2 bg-pink-100 md:row-span-1 md:col-span-1 rounded-3xl">
          <div className="flex flex-col justify-center items-center my-[10%]">
            <h1 className="text-2xl font-semibold">Audionic Music</h1>
            <img
              src="https://mm.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw0fb18ea9/JBL_JR300BT_Pink_Fold-1605x1605px.png?sw=537&sfrm=png"
              alt="product2"
              className="w-[150px]"
            ></img>
            <p className="font-semibold">feel a deep connection</p>
          </div>
        </div>
      </div>
    </div>
  );
};
