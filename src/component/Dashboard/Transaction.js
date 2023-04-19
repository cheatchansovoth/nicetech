import React, { Suspense, useEffect, useState } from "react";
import axios from "axios";
export const Transaction = () => {
  const [purchaseOrder, setPurchaseOrder] = useState([]);
  const [setTimeout, setSetTimeout] = useState(false);
  useEffect(() => {
    axios
      .get("https://nicetech.onrender.com/product/getProductOrder")
      .then((res) => {
        try {
          setSetTimeout(true);
          setPurchaseOrder(res.data);
        } catch (error) {
          console.log(error);
        } finally {
          setSetTimeout(false);
        }
      });
  }, []);
  return (
    <div className="w-[100%]">
      <div className="text-2xl font-bold text-center">Order Table</div>
      <div className="">
        <table class="border-separate border border-slate-500 w-[100%]">
          <thead>
            <tr>
              <th class="border border-slate-600 ">OrderID</th>
              <th class="border border-slate-600 ">Items</th>
              <th class="border border-slate-600 ">Date</th>
              <th class="border border-slate-600 ">Status</th>
              <th class="border border-slate-600 ">Cost</th>
            </tr>
          </thead>
          <tbody>
            {purchaseOrder.map((item, key) => {
              const date = new Date(item.date);
              const formattedDate = date.toLocaleString("en-GB");
              const total = item.total || 0;
              return (
                <>
                  <tr className="">
                    <td class="border border-slate-700 ...">
                      <div>
                        <span className="font-semibold">{item._id}</span>
                      </div>
                    </td>
                    <td class="border border-slate-700 ...">
                      <div>
                        <span className="font-semibold">{item.products}</span>
                      </div>
                    </td>
                    <td class="border border-slate-700 font-semibold">
                      {formattedDate}
                    </td>
                    <td class="border border-slate-700 font-semibold">
                      {item.status === "pending" ? (
                        <span className="text-red-500">{item.status}</span>
                      ) : (
                        <span className="text-green-500">{item.status}</span>
                      )}
                    </td>
                    <td class="border border-slate-700 font-semibold">
                      {total.toFixed(2)}
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
          <Suspense fallback={<div>Loading...</div>}>
            {setTimeout ? <div>Processing the payment</div> : null}
          </Suspense>
        </table>
      </div>
    </div>
  );
};
