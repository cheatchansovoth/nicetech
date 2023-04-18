import React, { useContext, useEffect, useMemo, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineArrowDown } from "react-icons/ai";
import ThemeContext from "./context/ThemeContext";
import { Alert } from "./Alert";
import axios from "axios";

export const Cart = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [type, setType] = useState("");
  const [alert, setAlert] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://nicetech.onrender.com/product/getProduct")
      .then((res) => {
        setData(res.data);
      });
  }, []);

  const handleClick = (index) => {
    setActiveIndex(index);
    if (index === 0) {
      setType("desktop");
    } else if (index === 1) {
      setType("ram");
    } else if (index === 2) {
      setType("GPU");
    } else if (index === 3) {
      setType("monitor");
    } else if (index === 4) {
      setType("laptop");
    }
  };
  const isActive = (index) => {
    return index === activeIndex;
  };
  const useType = useMemo(() => {
    return type ? data.filter((item) => item.type === type) : data;
  }, [data, type]);
  const [slice, setSlice] = useState(12);

  const handleSlice = () => {
    setSlice(slice + 12);
  };
  const { handleCart } = useContext(ThemeContext);

  const addCart = (item) => {
    setAlert(true);
    handleCart(item);
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  };
  const bgStyle = "bg-blue-300 rounded-full duration-150 font-semibold ";

  return (
    <div>
      {alert && <Alert show={true} />}
      <div className="flex justify-between w-[80%] mx-auto my-5">
        <h1 className="text-xl md:text-3xl font-bold uppercase underline">
          Our Top Products
        </h1>
        <select name="sort" className="bg-gray-500 font-bold rounded-2xl px-2">
          <option value="volvo">Highest</option>
          <option value="volvo">Lowest</option>
        </select>
      </div>
      <div className="w-[80%] mx-auto md:hidden">
        <select
          name="sort"
          className="bg-gray-500 font-bold rounded-2xl px-2 w-[100%]"
          value={activeIndex}
          onChange={(event) => {
            const index = parseInt(event.target.value);
            handleClick(index);
          }}
        >
          <option value={0}>PC Built</option>
          <option value={1}>Rams</option>
          <option value={2}>GPU</option>
          <option value={3}>Monitor</option>
          <option value={4}>Laptop</option>
        </select>
      </div>
      <div className="flex w-[90%] mx-auto">
        <div>
          <div className="bg-blue-200 p-5 space-y-5 rounded-2xl hidden xl:block w-[300px] text-black h-[580px]">
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
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-[90%] mx-auto gap-10 xl:w-[80%] my-5">
          {useType.slice(0, slice).map((item, key) => {
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
                    <h1 className="text-red-700 ">$ {item.price}</h1>
                  </div>
                  {item.processor && (
                    <p>
                      <span className="font-semibold">Processor</span>:{" "}
                      {item.processor}
                    </p>
                  )}
                  {item.memory && (
                    <p>
                      <span className="font-semibold">Memory</span>:{" "}
                      {item.memory}
                    </p>
                  )}
                  {item.brand && (
                    <p>
                      <span className="font-semibold">Brand</span>: {item.brand}
                    </p>
                  )}
                  {item.capacity && (
                    <p>
                      <span className="font-semibold">Capacity</span>:{" "}
                      {item.capacity} {item.speed}
                    </p>
                  )}
                  <button
                    className="bg-blue-500 w-[100%] rounded-full p-3 hover:bg-gray-500 duration-300 ease-in font-semibold"
                    onClick={() => addCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="w-[100%] flex justify-center">
        <div
          className="bg-blue-500 p-3 px-8 hover:bg-gray-500 duration-300 ease-in font-semibold flex justify-center items-center"
          onClick={handleSlice}
        >
          <button>Load more</button>
          <AiOutlineArrowDown />
        </div>
      </div>
    </div>
  );
};
