import React, { useState } from "react";
import { auth, GoogleAuth } from "./Authentication/Firebase";
import { sendPasswordResetEmail } from "firebase/auth";
export const Resetpassword = () => {
  const [resetPassword, setResetPassword] = useState("");
  const handleResetPassword = (event) => {
    event.preventDefault();
    sendPasswordResetEmail(auth, resetPassword)
      .then(() => {
        alert("Password reset link has been sent to your email");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="w-screen md:w-[90%] mx-auto">
      <div className="grid grid-cols-4 grid-rows-2 gap-4 ">
        <div className="col-span-4 md:col-span-3 row-span-2 bg-blue-400 rounded-xl">
          <div className="w-[100%] flex flex-col items-center justify-center min-h-[50vh]">
            <div>
              <h1 className="text-5xl font-bold">Reset Password</h1>
              <p className="font-semibold">
                Welcome back! Please enter your details
              </p>
              <form
                className="flex flex-col space-y-3"
                onSubmit={handleResetPassword}
              >
                <input
                  className="p-2 placeholder:font-bold rounded-md"
                  placeholder="Email"
                  onChange={(event) => {
                    setResetPassword(event.target.value);
                  }}
                ></input>
                <button
                  className="bg-blue-600 rounded-md px-6 py-2 hover:bg-blue-500"
                  type="submit"
                >
                  Submit
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
