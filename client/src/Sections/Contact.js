import React from "react";

export default function Contact() {
  return (
    <>
      <div className="container mx-auto" id="contact">
        <form
          className="h-screen px-4 py-6 container mx-auto flex justify-center items-center flex-col"
          id="WaitlistForm"
        >
          <h1 className="text-center font-bold text-5xl text-blue-700 mb-7 max-sm:text-4xl max-sm:my-3">
            Contact
          </h1>
          <div className="flex flex-col gap-7 px-3 py-4 my-4">
            <input
              type="text"
              placeholder="Name"
              className="text-white bg-slate-700 py-5 px-4 rounded-lg focus:bg-slate-500 focus:border-none focus:text-white border-none border-slate-500 lg:w-[600px] md:w-[450px] sm:w-[400px]"
              required="true"
            />
            <input
              type="email"
              placeholder="Email"
              className="text-white bg-slate-700 py-5 px-4 rounded-lg focus:bg-slate-500 focus:border-none focus:text-white border-none border-slate-500 lg:w-[600px] md:w-[450px] sm:w-[400px]"
              required="true"
            />
          </div>
          <button
            type="submit"
            className="text-2xl mt-7 max-sm:my-2 rounded-[15px] border-blue-700 border-[4px] w-fit px-5 py-3 cursor-pointer  hover:text-emerald-600 hover:border-emerald-600 lg:my-10 max-sm:text-xl"
          >
            Submit
          </button>
          <div className="flex flex-row items-center justify-center px-3 py-10 gap-4">
            <a href="/" target="blank">
              Github
            </a>
            <a href="/" target="blank">
              LinkedIn
            </a>
            <a href="/" target="blank">
              X
            </a>
            <a href="/" target="blank">
              Mail
            </a>
            <a href="/" target="blank">
              Phone
            </a>
          </div>
        </form>
      </div>
    </>
  );
}
