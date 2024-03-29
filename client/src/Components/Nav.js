import React from "react";



export default function Nav() {
  return (
    <header className="flex  justify-end items-center absolute inset-0 max-sm:justify-center max-sm:hidden">
      <ul className="fixed flex gap-8 flex-col justify-center h-screen z-[100] max-sm:items-center max-sm:bg-black max-sm:bg-opacity-80 max-sm:w-full">
        <li className="links z-[100] max-sm:rotate-0 rotate-90 my-8">
          <a
            className="hover:text-blue-600 cursor-pointer text-2xl"
            href="#home"
          >
            HOME
          </a>
        </li>
        <li className="links z-[100] max-sm:rotate-0 rotate-90 my-8">
          <a
            className="hover:text-blue-600 cursor-pointer text-2xl"
            href="#about"
          >
            ABOUT
          </a>
        </li>
        <li className="links z-[100] max-sm:rotate-0 rotate-90 my-8">
          <a
            className="cursor-pointer text-2xl hover:text-blue-600"
            href="#projects"
          >
            PROJECT
          </a>
        </li>
        <li className="links z-[100] max-sm:rotate-0 rotate-90 my-8">
          {" "}
          <a
            className="hover:text-blue-600 cursor-pointer text-2xl "
            href="#contact"
          >
            CONTACT
          </a>
        </li>
      </ul>
    </header>
  );
}
