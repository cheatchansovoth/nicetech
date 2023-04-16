import React, { useContext, useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { auth, GoogleAuth } from "./Authentication/Firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import ThemeContext from "./context/ThemeContext";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { setUser, isLoggin, setIsLoggin, user } = useContext(ThemeContext);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);
  useEffect(() => {
    if (isLoggin) {
      navigate("/");
    }
  }, [isLoggin]);
  const SignIn = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
      }
    } catch (err) {
      setError("Invalid Credentials");
    }
  };
  const SignInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, GoogleAuth);
      const user = auth.currentUser;
      if (user) {
        setUser(user);
        setIsLoggin(true);
        navigate("/");
      }
    } catch (err) {
      setError("Invalid Credentials");
    }
  };
  const handleChangePage = (route) => {
    navigate(route);
  };
  return (
    <div className="w-screen md:w-[90%] mx-auto">
      <div className="grid grid-cols-4 grid-rows-2 gap-4 ">
        <div className="col-span-4 md:col-span-3 row-span-2 bg-blue-400 rounded-xl">
          <div className="w-[100%] flex flex-col items-center justify-center min-h-[50vh]">
            <div>
              <h1 className="text-5xl font-bold">LOG IN</h1>
              <p className="font-semibold">
                Welcome back! Please enter your details
              </p>
              <div className="w-[100%] flex item-center items-center bg-white justify-center p-1 rounded-md shadow-black shadow-md">
                <span className="text-4xl">
                  <FcGoogle />
                </span>
                <button
                  className="text-black text-xl font-semibold"
                  onClick={SignInWithGoogle}
                >
                  Log in with Google
                </button>
              </div>
              <div className="flex items-center my-3">
                <hr className="border-gray-400 border-1 w-full mr-4" />
                <span className="font-bold text-gray-600">OR</span>
                <hr className="border-gray-400 border-1 w-full ml-4" />
              </div>
              <form className="flex flex-col space-y-3">
                <input
                  className="p-2 placeholder:font-bold rounded-md text-black"
                  placeholder="Username"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                ></input>
                <input
                  className=" p-2 placeholder:font-bold rounded-md text-black"
                  placeholder="Password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                ></input>
                <p
                  className="text-end text-blue-700 font-bold cursor-pointer"
                  onClick={() => handleChangePage("/resetpassword")}
                >
                  Forget Password
                </p>
                <button
                  className="bg-blue-600 rounded-md px-6 py-2 hover:bg-blue-500"
                  onClick={SignIn}
                >
                  Sign in
                </button>
              </form>
              <div className="flex justify-between">
                <p className="font-bold">Don't have An account ?</p>
                <span
                  className="text-blue-700 font-bold cursor-pointer"
                  onClick={() => handleChangePage("/register")}
                >
                  Sign up here
                </span>
              </div>
              {error && <p className="text-red-500 font-semibold">{error}</p>}
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
