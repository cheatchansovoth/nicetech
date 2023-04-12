import { useState } from "react";
import { Topbar } from "./component/Topbar";
import ThemeContext from "./component/context/ThemeContext";
import { Center } from "./component/Center";
import { Cart } from "./component/Cart";

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
        <Topbar />
        <Center />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
