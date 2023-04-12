import React from "react";
import Laptop from "./files/Laptop.json";
export const Cart = () => {
  return (
    <div>
      <div className="flex justify-between w-[80%] mx-auto my-5">
        <h1 className="text-xl md:text-3xl font-bold uppercase underline">
          Our Top Products
        </h1>
        <select name="sort" className="bg-gray-500 font-bold rounded-2xl px-2">
          <option value="volvo">Sort By</option>
        </select>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-[90%] mx-auto gap-10 xl:w-[80%]">
        {Laptop.filter((item, index) => index < 8).map((item, key) => {
          return (
            <>
              <div className="flex flex-col xl:w-[70%] space-y-3">
                <img
                  src={item.image}
                  alt=""
                  className="w-[100%] rounded-3xl "
                />
                <div className="flex space-x-5">
                  <h1 className="font-semibold">{item.model}</h1>
                  <h1 className="text-red-700 ">{item.price}</h1>
                </div>
                <p>
                  <span className="font-semibold">Processor</span>:{" "}
                  {item.processor}
                </p>
                <p>
                  <span className="font-semibold">Memory</span>: {item.memory}
                </p>

                <button className="bg-blue-500 w-[100%] rounded-full p-3 hover:bg-gray-500 duration-300 ease-in font-semibold">
                  Add to Cart
                </button>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
