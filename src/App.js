import { useState } from "react";
import { Topbar } from "./component/Topbar";
import ThemeContext from "./component/context/ThemeContext";

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className="bg-gray-800 text-white min-h-screen">
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Topbar />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
