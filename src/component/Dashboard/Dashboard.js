import React, { useEffect, useState } from "react";
import { IoFileTrayFullOutline } from "react-icons/io5";
import { SiSellfy } from "react-icons/si";
import { BiUserCircle } from "react-icons/bi";
import axios from "axios";
import { MdCreateNewFolder, MdRemoveCircle } from "react-icons/md";
import { AiOutlineEdit, AiOutlineFolderView } from "react-icons/ai";
import { Transaction } from "./Transaction";
export const Dashboard = () => {
  const [getItem, setGetItem] = useState([]);
  const [request, setRequest] = useState(false);
  const [getOrder, setGetOrder] = useState([]);
  useEffect(() => {
    axios
      .get("https://nicetech.onrender.com/product/getProduct")
      .then((res) => {
        try {
          setRequest(true);
          setGetItem(res.data);
        } catch (error) {
          console.log(error);
        } finally {
          setRequest(false);
        }
      });
    axios
      .get("https://nicetech.onrender.com/product/getProductOrder")
      .then((res) => {
        try {
          setRequest(true);
          setGetOrder(res.data);
        } catch (error) {
          console.log(error);
        } finally {
          setRequest(false);
        }
      });
  }, []);
  return (
    <div className="w-screen">
      <div className="flex w-[95%] min-h-[85vh] mx-auto space-x-5">
        <div className="w-[15%] min-h-[90vh] bg-blue-500 my-[1%] rounded-2xl">
          <div className="font-bold ">
            <h1 className="text-3xl text-center my-4">Admin Dashboard</h1>
            <div className="text-xl w-[70%] mx-auto space-y-5 my-10">
              <div className="flex  items-center">
                <h1 className="hover:text-blue-200 cursor-pointer">
                  Create New Product
                </h1>
                <MdCreateNewFolder />
              </div>
              <div className="flex  items-center">
                <h1 className="hover:text-blue-200 cursor-pointer">
                  Modify Product
                </h1>
                <AiOutlineEdit />
              </div>
              <div className="flex  items-center">
                <h1 className="hover:text-blue-200 cursor-pointer">
                  View Product
                </h1>
                <AiOutlineFolderView />
              </div>
              <div className="flex items-center">
                <h1 className="hover:text-blue-200 cursor-pointer">
                  Remove Product
                </h1>
                <MdRemoveCircle />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[80%] ">
          <div className="grid gap-4 grid-cols-3 my-[2%]">
            <div className="col-span-1 ">
              <div className="bg-blue-600 p-8 flex flex-col justify-center items-center rounded-3xl">
                <div className="text-3xl flex space-x-2 items-center ">
                  <h1 className="">Product</h1>
                  <span>
                    <IoFileTrayFullOutline />
                  </span>
                </div>
                <div className="flex text-2xl">
                  <p>Total Item:</p>
                  <span>{getItem.length}</span>
                </div>
              </div>
            </div>
            <div className="col-span-1 row-span-1 ">
              {" "}
              <div className="bg-pink-400 p-8 flex flex-col justify-center items-center rounded-3xl">
                <div className="text-3xl flex space-x-2 items-center">
                  <h1 className="">Item Sold</h1>
                  <span>
                    <SiSellfy />
                  </span>
                </div>
                <div className="flex text-2xl">
                  <p>Total Sold:</p>
                  <span>{getOrder.length}</span>
                </div>
              </div>
            </div>
            <div className="col-span-1 row-span-1 ">
              <div className="bg-blue-300 p-8 flex flex-col justify-center items-center rounded-3xl">
                <div className="text-3xl flex space-x-2 items-center">
                  <h1 className="">Current User</h1>
                  <span>
                    <BiUserCircle />
                  </span>
                </div>
                <div className="flex text-2xl">
                  <p>Total User:</p>
                  <span>{getItem.length}</span>
                </div>
              </div>
            </div>
            <div className="col-span-3 row-span-1">
              <Transaction />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
