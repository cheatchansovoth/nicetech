import React, { Suspense, useContext, useState } from "react";
import ThemeContext from "./context/ThemeContext";
import { Alert } from "./Alert";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
export const CheckoutCart = ({ Product }) => {
  const TotalPrice = Product.reduce((total, item) => total + item.price, 0);
  const TotalIncludeGST = TotalPrice + 5 * 0.05;
  const [alert, setAlert] = useState(false);
  const { removeCart } = useContext(ThemeContext);
  const [showLoading, setShowLoading] = useState(false);
  const navigate = useNavigate();
  const handleRemoveProduct = (item) => {
    setAlert(true);
    removeCart(item);
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  };
  const { user } = useContext(ThemeContext);

  const handleCheckout = async () => {
    if (user.length <= 0) {
      return navigate("/login");
    }
    const api1 = "http://localhost:5000/create-checkout-session";
    const api2 = "https://nicetech.onrender.com/create-checkout-session";
    const data = { Product: Product, user: user, total: TotalIncludeGST };

    try {
      setShowLoading(true); // show loading message before making the API request
      const response1 = await Axios.post(api1, { data });
      window.location.href = response1.data.url;
    } catch (error1) {
      console.log(`Error sending POST request to ${api1}: ${error1}`);
      try {
        const response2 = await Axios.post(api2, { data });
        window.location.href = response2.data.url;
      } catch (error2) {
        console.log(`Error sending POST request to ${api2}: ${error2}`);
        alert(
          "Sorry, something went wrong with the checkout. Please try again later."
        );
      }
    } finally {
      setShowLoading(false); // hide loading message after the API request is done (whether successful or not)
    }
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
            <h1>Total Cost: {TotalIncludeGST}</h1>
          </div>
          <button
            className="bg-blue-500 p-2 rounded-xl"
            onClick={handleCheckout}
          >
            Check Out
          </button>
          <Suspense fallback={<div>Loading...</div>}>
            {showLoading ? <div>Processing the payment</div> : null}
          </Suspense>
        </table>
      </div>
    </div>
  );
};
