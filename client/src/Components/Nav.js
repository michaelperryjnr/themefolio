import React from "react";

export default function Nav() {
  return (
    <div className="flex  justify-end fixed w-full inset-0 items-center max-sm:[display:none]">
      <div className="flex gap-8 flex-col justify-center h-screen">
        <a className="cursor-pointer text-2xl rotate-90 my-2" href="#about">
          ABOUT
        </a>
        <a className="cursor-pointer text-2xl rotate-90 my-8 hover:text-red-600" href="#projects">
          PROJECT
        </a>
        <a className="cursor-pointer text-2xl rotate-90 my-8" href="#contact">
          CONTACT
        </a>
      </div>
    </div>
  );
}
