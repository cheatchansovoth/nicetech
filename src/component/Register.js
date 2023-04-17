import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "./Authentication/Firebase";
export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const SignUp = async (event) => {
    event.preventDefault();
    try {
      if (password !== confirmPassword) {
        setError("Password does not match");
        return;
      }
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
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
              <form
                className="flex flex-col space-y-3 text-black"
                onSubmit={SignUp}
              >
                <input
                  className="p-2 placeholder:font-bold rounded-md"
                  placeholder="Username"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                ></input>
                <input
                  className="p-2 placeholder:font-bold rounded-md"
                  placeholder="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                ></input>
                <input
                  className=" p-2 placeholder:font-bold rounded-md"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                ></input>
                <input
                  className=" p-2 placeholder:font-bold rounded-md"
                  type="password"
                  placeholder="Confirm Password"
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                ></input>
                <div>
                  <input type="checkbox" />
                  <label className="text-blue-700">Agree with the term</label>
                </div>
                <button
                  className="bg-blue-600 rounded-md px-6 py-2 hover:bg-blue-500"
                  type="submit"
                >
                  Sign Up
                </button>
              </form>
            </div>
            {error && <p className="text-red-500 font-semibold">{error}</p>}
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
