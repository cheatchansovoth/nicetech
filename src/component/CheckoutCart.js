import React, { useContext, useState } from "react";
import ThemeContext from "./context/ThemeContext";
import { Alert } from "./Alert";

export const CheckoutCart = ({ Product }) => {
  const TotalPrice = Product.reduce((total, item) => total + item.price, 0);
  const [alert, setAlert] = useState(false);
  const { removeCart } = useContext(ThemeContext);

  const handleRemoveProduct = (item) => {
    setAlert(true);
    removeCart(item);
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  };
  return (
    <div>
      <div>{alert && <Alert show={false} />}</div>
      <div className="w-screen flex justify-center">
        <table class="border-separate  border border-slate-500 w-3/4">
          <thead>
            <tr>
              <th class="border border-slate-600 ">Product Name & Details</th>
              <th class="border border-slate-600 ">Price</th>
              <th class="border border-slate-600 ">Quantity</th>
              <th class="border border-slate-600 ">Total</th>
              <th class="border border-slate-600 "></th>
            </tr>
          </thead>
          <tbody>
            {Product.map((item, key) => {
              return (
                <>
                  <tr>
                    <td class="border border-slate-700 ...">
                      <div>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-[40px]"
                        />
                        <span className="font-semibold">{item.model}</span>
                      </div>
                    </td>
                    <td class="border border-slate-700 font-semibold">
                      {item.brand}
                    </td>
                    <td class="border border-slate-700 font-semibold">x1</td>
                    <td class="border border-slate-700 font-semibold">
                      {item.price}
                    </td>
                    <td class="border border-slate-700 font-semibold">
                      <div className="text-center">
                        <button
                          className="bg-red-500 p-1"
                          onClick={() => handleRemoveProduct(item.cartID)}
                        >
                          Cancel
                        </button>
                      </div>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
          <div className="">
            <h1>Shipping : $5</h1>
            <h1>GST: 5%</h1>
            <h1>Total Cost: {TotalPrice + 5 * 0.05}</h1>
          </div>
        </table>
      </div>
    </div>
  );
};
