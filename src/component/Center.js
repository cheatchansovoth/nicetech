import React, { useState } from "react";
import { TbTruckDelivery, TbDiscount2 } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { RiRefund2Line } from "react-icons/ri";
import { Cart } from "./Cart";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const Center = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="w-screen my-5">
      <div className="w-[90%] justify-center md:hidden mx-auto">
        {/* <span className="text-xl">
          <GiHamburgerMenu />
        </span> */}
        <input
          type="text"
          className="w-[100%] rounded-md bg-gray-200 py-2 text-black placeholder:text-black md:placeholder:text-xl placeholder:text-center"
          style={{ paddingLeft: "30px" }}
          placeholder="Search for products"
        ></input>
      </div>
      <div className="w-screen md:w-[90%] mx-auto flex">
        <div className="w-[100%] min-h-[480px]">
          <div className="flex md:justify-end space-x-10 text-sm md:text-xl my-5 w-[90%]">
            <p className="font-semibold">Home</p>
            <p className="font-semibold">Today's Deal</p>
            <p className="font-semibold">Trending Products</p>
            <p className="font-semibold">Blogs</p>
            <p className="text-blue-400 font-semibold">Special Offers</p>
          </div>
          <div>
            <div className="grid grid-cols-4 grid-rows-2 min-h-[480px] gap-4 ">
              <div className="col-span-4 bg-blue-300 row-span-2 md:col-span-3 md:row-span-2 rounded-3xl ">
                <Slider {...settings} arrows={false}>
                  <div>
                    <div className="w-[90%] mx-auto items-center justify-center flex min-h-[30vh] md:min-h-[70vh] xl:min-h-[50vh]">
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
                  <div>
                    <div className="w-[90%] mx-auto items-center justify-center flex min-h-[30vh] md:min-h-[70vh] xl:min-h-[50vh] ">
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
                          src="https://cdn.shopify.com/s/files/1/0573/2309/4216/products/LosAngeles_SandGold_001_1200x1200.png?v=1650876856"
                          alt="product"
                          className="w-[200px] md:w-[420px]"
                        ></img>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="w-[90%] mx-auto items-center justify-center flex min-h-[30vh] md:min-h-[70vh] xl:min-h-[50vh]">
                      <div className="w-[45%] space-y-3">
                        <h1 className="text-xl font-bold md:text-4xl">
                          Grab upto 30% off on Selected MacBook
                        </h1>
                        <button className="bg-blue-400 px-6 rounded-xl font-bold py-2">
                          Stop Now
                        </button>
                      </div>
                      <div className="w-[45%]">
                        <img
                          src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=1078&hei=730&fmt=png-alpha&.v=1653084303665"
                          alt="product"
                          className="w-[200px] md:w-[620px]"
                        ></img>
                      </div>
                    </div>
                  </div>
                </Slider>
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
        </div>
      </div>
      <div className="my-4">
        <div className="bg-blue-300 lg:min-h-[200px] flex flex-col justify-center w-[100%] rounded-xl md:w-[90%] mx-auto">
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
    </div>
  );
};
