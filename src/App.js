import { useState } from "react";
import { Topbar } from "./component/Topbar";
import ThemeContext from "./component/context/ThemeContext";
import { Center } from "./component/Center";
import { Cart } from "./component/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./component/Login";
import { Register } from "./component/Register";
import { Resetpassword } from "./component/Resetpassword";
import { CheckoutCart } from "./component/CheckoutCart";
import { ViewItem } from "./component/ViewItem";
import { Transaction } from "./component/Dashboard/Transaction";
import { Dashboard } from "./component/Dashboard/Dashboard";
function App() {
  const [isDark, setIsDark] = useState(false);
  const [user, setUser] = useState([]);
  const [isLoggin, setIsLoggin] = useState(false);
  const [storeCart, setStoreCart] = useState([]);

  const handleCart = (product) => {
    const cartID = Date.now().toString();
    const item = { ...product, cartID };
    setStoreCart([...storeCart, item]);
  };
  const removeCart = (id) => {
    const newCart = storeCart.filter((item) => item.cartID !== id);
    setStoreCart(newCart);
  };
  return (
    <div
      className={
        isDark
          ? " bg-gray-800 min-h-screen text-white duration-500"
          : "bg-white min-h-screen text-black duration-500"
      }
    >
      <ThemeContext.Provider
        value={{
          isDark,
          setIsDark,
          user,
          setUser,
          isLoggin,
          setIsLoggin,
          storeCart,
          handleCart,
          removeCart,
        }}
      >
        <Router>
          <Topbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Center />
                  <Cart />
                </>
              }
            />
            <Route
              path="/login"
              element={
                <>
                  <Login />
                </>
              }
            />
            <Route
              path="/register"
              element={
                <>
                  <Register />
                </>
              }
            />
            <Route
              path="/resetpassword"
              element={
                <>
                  <Resetpassword />
                </>
              }
            />
            <Route
              path="/checkout"
              element={
                <>
                  <CheckoutCart Product={storeCart} />
                </>
              }
            />
            <Route
              path="/viewitem"
              element={
                <>
                  <ViewItem />
                </>
              }
            />
            <Route
              path="/viewitem/:id"
              element={
                <>
                  <ViewItem />
                </>
              }
            />
            <Route
              path="admin/dashboard"
              element={
                <>
                  <Dashboard />
                </>
              }
            />
            <Route
              path="admin/dashboard/purchaseorder"
              element={
                <>
                  <Transaction />
                </>
              }
            />
          </Routes>
        </Router>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
