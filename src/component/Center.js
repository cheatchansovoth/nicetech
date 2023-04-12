import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbTruckDelivery, TbDiscount2 } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { RiRefund2Line } from "react-icons/ri";

export const Center = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const isActive = (index) => {
    return index === activeIndex;
  };

  const bgStyle = "bg-blue-300 rounded-full duration-150 font-semibold ";

  return (
    <div className="w-screen my-5">
      <div className="w-screen md:w-[90%] mx-auto flex">
        <div className="bg-blue-200 p-5 space-y-5 rounded-2xl hidden xl:block w-[300px] text-black">
          <div className="flex items-center bg-pink-100 rounded-3xl px-3 py-4">
            <span>
              <RxHamburgerMenu />
            </span>
            <h1 className="lg:text-md font-bold">Browse Categories</h1>
          </div>
          <div className="w-[90%] mx-auto space-y-5 font-light">
            <div
              className={`flex justify-between ${
                isActive(0) ? `${bgStyle}` : ""
              }`}
              onClick={() => handleClick(0)}
            >
              <p className="mx-3">PC built</p>
              <span>></span>
            </div>
            <div
              className={`flex justify-between ${
                isActive(1) ? `${bgStyle}` : ""
              }`}
              onClick={() => handleClick(1)}
            >
              <p className="mx-3">Rams</p>
              <span>></span>
            </div>
            <div
              className={`flex justify-between ${
                isActive(2) ? `${bgStyle}` : ""
              }`}
              onClick={() => handleClick(2)}
            >
              <p className="mx-3">GPU</p>
              <span>></span>
            </div>
            <div
              className={`flex justify-between ${
                isActive(3) ? `${bgStyle}` : ""
              }`}
              onClick={() => handleClick(3)}
            >
              <p className="mx-3">Monitor</p>
              <span>></span>
            </div>
            <div
              className={`flex justify-between ${
                isActive(4) ? `${bgStyle}` : ""
              }`}
              onClick={() => handleClick(4)}
            >
              <p className="mx-3">Laptop</p>
              <span>></span>
            </div>
          </div>
        </div>
        <div className="w-[100%] min-h-[480px]">
          <div className="flex md:justify-end space-x-10 text-sm md:text-xl my-5 w-[90%]">
            <p className="font-semibold">Home</p>
            <p className="font-semibold">Today's Deal</p>
            <p className="font-semibold">Trending Products</p>
            <p className="font-semibold">Blogs</p>
            <p className="text-blue-400 font-semibold">Special Offers</p>
          </div>
          <div>
            <div className="grid grid-cols-4 grid-rows-2 min-h-[480px] gap-4">
              <div className="col-span-4 bg-blue-300 row-span-2 md:col-span-3 md:row-span-2 rounded-3xl md:mx-3">
                <div className="w-[90%] mx-auto items-center justify-center flex h-[100%]">
                  <div className="w-[45%] space-y-3">
                    <h1 className="text-xl font-bold md:text-4xl">
                      Grab upto 50% off on Selected Headphones
                    </h1>
                    <button className="bg-blue-400 px-6 rounded-xl font-bold py-2">
                      Stop Now
                    </button>
                  </div>
                  <div className="w-[45%]">
                    <img
                      src="https://www.apple.com/v/airpods-max/e/images/overview/hero__gnfk5g59t0qe_xlarge.png"
                      alt="product"
                      className="w-[200px] md:w-[400px]"
                    ></img>
                  </div>
                </div>
              </div>
              <div className="col-span-2 row-span-2 bg-blue-200 md:row-span-1 md:col-span-1 rounded-3xl">
                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-xl font-semibold">Audionic Music</h1>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0573/2309/4216/products/LosAngeles_SandGold_001.png?v=1650876856"
                    alt="product1"
                    className="w-[150px]"
                  ></img>
                </div>
              </div>
              <div className="col-span-2 row-span-2 bg-pink-100 md:row-span-1 md:col-span-1 rounded-3xl">
                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-xl font-semibold">Audionic Music</h1>
                  <img
                    src="https://mm.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw0fb18ea9/JBL_JR300BT_Pink_Fold-1605x1605px.png?sw=537&sfrm=png"
                    alt="product2"
                    className="w-[150px]"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-[20px] bg-blue-300 py-3 min-h-[200px] flex flex-col justify-center w-[100%] rounded-xl md:w-[90%] mx-auto">
        <div className="grid grid-cols-4 ">
          <div className="col-span-2 md:col-span-1 flex justify-center items-center ">
            <span className="text-6xl bg-blue-300 rounded-lg">
              <TbTruckDelivery />
            </span>
            <div>
              <h1 className="font-bold text-xl">Free Delivery</h1>
              <p className="font-light">Free shipping on all orders</p>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 flex justify-center items-center ">
            <span className="text-6xl bg-blue-300 rounded-lg">
              <BiSupport />
            </span>
            <div>
              <h1 className="font-bold text-xl">Online Support 24/7</h1>
              <p className="font-light">Support online 24 hours a day</p>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 flex justify-center items-center ">
            <span className="text-6xl bg-blue-300 rounded-lg">
              <RiRefund2Line />
            </span>
            <div>
              <h1 className="font-bold text-xl">Money Return</h1>
              <p className="font-light">Return guarantee under 3 days</p>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 flex justify-center items-center ">
            <span className="text-6xl bg-blue-300 rounded-lg">
              <TbDiscount2 />
            </span>
            <div>
              <h1 className="font-bold text-xl">Member Discount</h1>
              <p className="font-light">On every order over $100</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
