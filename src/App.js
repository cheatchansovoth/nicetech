import { useState } from "react";
import { Topbar } from "./component/Topbar";
import ThemeContext from "./component/context/ThemeContext";
import { Center } from "./component/Center";
import { Cart } from "./component/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./component/Login";
import { Register } from "./component/Register";
import { Resetpassword } from "./component/Resetpassword";
function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div
      className={
        isDark
          ? " bg-gray-800 min-h-screen text-white duration-500"
          : "bg-white min-h-screen text-black duration-500"
      }
    >
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
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
          </Routes>
        </Router>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
