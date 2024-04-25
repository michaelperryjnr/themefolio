import React, { useState, useEffect } from "react";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
export default function MobileNav() {
  const [showNav, setShowNav] = useState(false);
  useEffect(() => {
    const navBtn = document.getElementById("navBtn");
    navBtn.addEventListener("click", toggleNav);
    return () => {
      navBtn.removeEventListener("click", toggleNav);
    };
  }, []);

  const toggleNav = () => {
    setShowNav((prevShowNAv) => !prevShowNAv);
  };

  return (
    <>
      <div className="fixed top-1/2 left-2 z-[101] md:hidden">
        <button
          className=" px-3 py-3 rounded-full border-blue-700 border-2 hover:border-emerald-700"
          id="navBtn"
        >
          <MdMenu className="w-full" />
        </button>
      </div>

      {showNav && <MobileNavContents />}
    </>
  );
}

function MobileNavContents() {
  return (
    <div className="fixed flex flex-col justify-center items-center h-screen w-screen z-[100] bg-black bg-opacity-70 md:hidden">
      <div className="*:text-4xl *:text-center *:text *:font-medium flex flex-col gap-14">
        <a className="rounded-lg px-4 py-4 bg-blue-500 bg-opacity-30 text-white hover:animate-bounce shadow-lg shadow-emerald-800" href="#home">Home</a>
        <a className="rounded-lg px-4 py-4 bg-blue-500 bg-opacity-30 text-white hover:animate-bounce shadow-lg shadow-emerald-800" href="#about">About</a>
        <a className="rounded-lg px-4 py-4 bg-blue-500 bg-opacity-30 text-white hover:animate-bounce shadow-lg shadow-emerald-800" href="#projects">Projects</a>
        <a className="rounded-lg px-4 py-4 bg-blue-500 bg-opacity-30 text-white hover:animate-bounce shadow-lg shadow-emerald-800" href="#contact">Contact</a>
      </div>
    </div>
  );
}
