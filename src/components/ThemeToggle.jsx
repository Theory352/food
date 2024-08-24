import React, { useState, useEffect } from "react";
import { FaLightbulb } from "react-icons/fa";

const ThemeToggle = () => {
  // State to track the current theme
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  // Apply the theme by updating the class on the html element
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle theme between 'light' and 'dark'
  const toggleTheme = (e) => {
    e.stopPropagation();
    const newTheme = theme === "light" ? "night" : "light";
    setTheme(newTheme);
  };

  return (
    // <button className="btn" >
    //   {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    // </button>

    <div
      className={`${
        theme == "light"
          ? "text-yellow-300 hover:text-slate-400"
          : " hover:text-yellow-300 "
      }  cursor-pointer bg-slate-600 rounded-full p-2`}
      onClick={toggleTheme}
    >
      <FaLightbulb />
    </div>
  );
};

export default ThemeToggle;
