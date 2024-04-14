import React from "react";
import Projects from "../Sections/Projects";
import About from "../Sections/About";
import Contact from "../Sections/Contact";
import heroImg from '../assets/heroimg.png'

export default function Home() {
  return (
    <>
      <section
        className="hero-section mx-auto h-screen relative flex-1  flex flex-col justify-center lg:justify-between px-6 py-6 overflow-hidden max-sm:justify-between"
        id="home"
      >
        <div className="flex flex-row justify-between  relative max-sm:justify-center max-sm:py-8 ">
          <a
            className="text-slate-700 font-semibold text-3xl max-sm:text-3xl"
            href="/"
          >
            The<span className="text-gray-300">MeFolio</span>
          </a>
          <a
            className=" text-cyan-700 font-semibold text-3xl text-right max-sm:[display:none]"
            href="/"
          >
            Tettey <br />
            Michael Perry
          </a>
        </div>
        <div className="flex flex-col items-center relative justify-center">
          <div className="w-96 h-96 item-center rounded-full border-[15px] border-blue-600 flex fle-col justify-center items-center max-sm:w-44 max-sm:h-44 px-52 py-52 max-sm:px-40 max-sm:py-40">
            <div className="w-96 w h-96 item-center rounded-full border-[20px] border-green-600 blur-lg max-sm:w-56 max-sm:h-56 px-52 py-52 max-sm:px-40 max-sm:py-40"></div>
          </div>
          <div className="absolute h-full max-sm:bottom-4 flex items-center justify-center pt-20 max-sm:items-center max-sm:justify-center max-sm:right-6">
            <img src={heroImg} alt="" className="" />
          </div>
        </div>

        <div className="max-sm:my-6 cursor-default">
          <div className="max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center">
            <a
              className="t text-blue-600 font-semibold text-3xl hidden max-sm:contents text-center"
              href="/"
            >
              Tettey Michael Perry
            </a>
            <h2 className="text-2xl font-semibold max-sm:text-xl max-sm:text-center">
              Web Developer & SWE
            </h2>
            <h3 className="text-xl max-sm:text-xl max-sm:text-center">
              From{" "}
              <span className="text-emerald-700 font-semibold text-2xl">
                GH
              </span>
            </h3>
          </div>
          <div className="socials"></div>
        </div>
      </section>
      <About />
      <Projects />
      <Contact />
    </>
  );
}
