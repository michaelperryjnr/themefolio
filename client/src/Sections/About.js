import React from "react";
import profile from "../assets/profile1.jpeg"

export default function About() {
  return (
    <section className="container mx-auto" id="about">
      <div className="h-screen px-4 py-6 container mx-auto flex justify-center items-center flex-col">
        <h1 className="text-6xl font-semibold text-gray-300 max-sm:text-4xl">
          About
        </h1>
        <div className="flex flex-row gap-4 items-center justify-center px-10 py-10 max-sm:flex-col max-sm:py-2 max-sm:px-2 max-sm:text-center">
          <div className="w-1/4 flex items-center gap-4 justify-center">
            <img className="rounded-[20%] max-sm:rounded-full" src={profile} width={650} height={650} alt="profile" />
          </div>
          <div className="w-3/4">
            <p className="text-3xl font-medium text-gray-400 max-sm:text-sm">
              I'm a passionate full-stack developer with a love for creating
              elegant solutions to complex problems. My journey started with a
              simple "Hello, World!" and has led me to build and deploy scalable
              web applications. I'm a quick learner, a team player, and I thrive
              in fast-paced environments.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 items-center justify-center md:gap-16 max-sm:flex max-sm:flex-col max-sm:gap-4 py-10">
          <div className="w-1/4">
            <h2 className="text-gray-500 text-6xl font-semibold  max-sm:text-center max-sm:text-2xl">
              Skills
            </h2>
          </div>
          <div className=" justify-start items-start  w-3/4">
            <div className="grid grid-cols-2  gap-x-10 gap-y-10  max-sm:justify-self-center max-sm:gap-x-3 max-sm:gap-y-5 max-sm:py-4">
              <div className="flex items-center gap-4">
                <CodeIcon className="w-10 h-10 max-sm:w-4 max-sm:h-4 flex-shrink-0" />
                <span className="max-sm:text-sm text-2xl text-yellow-500">
                  JavaScript
                </span>
              </div>
              <div className="flex items-center gap-4">
                <TerminalIcon className="w-10 h-10 max-sm:w-4 max-sm:h-4 flex-shrink-0" />
                <span className="max-sm:text-sm text-2xl text-blue-400">
                  TypeScript
                </span>
              </div>
              <div className="flex items-center gap-4">
                <GlobeIcon className="w-10 h-10 max-sm:w-4 max-sm:h-4 flex-shrink-0" />
                <span className="max-sm:text-sm text-2xl text-gray-600">
                  ExpressJS
                </span>
              </div>
              <div className="flex items-center gap-4">
                <ComponentIcon className="w-10 h-10 max-sm:w-4 max-sm:h-4 flex-shrink-0" />
                <span className="max-sm:text-sm text-2xl">
                  <span className="max-sm:text-sm text-blue-500">ReactJs</span>/
                  <span className="max-sm:text-sm text-gray-400">NextJS</span>
                </span>
              </div>
              <div className="flex items-center gap-4">
                <DatabaseIcon className="w-10 h-10 max-sm:w-4 max-sm:h-4 flex-shrink-0" />
                <span className="max-sm:text-sm text-2xl text-green-500">
                  Mongo<span>DB</span>
                </span>
              </div>
              <div className="flex items-center gap-4">
                <ServerIcon className="w-10 h-10 max-sm:w-4 max-sm:h-4 flex-shrink-0" />
                <span className="max-sm:text-sm text-2xl text-green-800">
                  NodeJS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function ComponentIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
      <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
      <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
      <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
    </svg>
  );
}

function DatabaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

function GlobeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function ServerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  );
}

function TerminalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" x2="20" y1="19" y2="19" />
    </svg>
  );
}
