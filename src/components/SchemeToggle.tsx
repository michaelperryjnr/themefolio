"use client";

import { useTheme } from "next-themes";

const SchemeToggle = () => {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  let svgPath = "";
  let spanContent = "";

  if (theme === "light") {
    svgPath =
      "M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z";
    spanContent = "Toggle to Dark Mode";
  } else {
    svgPath =
      "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z";
    spanContent = "Toggle to Light Mode";
  }

  return (
    <button
      onClick={toggleTheme}
      className={
        theme === "light"
          ? "border-[1.6px] border-solid border-ground-700 bg-ground-700 border-opacity-20 rounded-xl p-1 bg-opacity-20 sm:p-2"
          : "border-[1.6px] border-solid bg-ground-400 border-ground-500  border-opacity-20 rounded-xl p-1 bg-opacity-40 sm:p-2 sm:rounded-xl"
      }
    >
      <span className="sr-only">{spanContent}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={
          theme === "light" ? "w-4 h-4 text-white" : "w-4 h-4 text-white"
        }
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={svgPath} />
      </svg>
    </button>
  );
};

export default SchemeToggle;
