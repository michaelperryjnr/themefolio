import React from "react"
import courseSues from "../assets/projects/coursesues.png"
import dcs from "../assets/projects/dcs.jpeg"
import themeSender from "../assets/projects/themesender.jpeg"
import weStream from "../assets/projects/westream.jpeg"

export default function Component() {
  return (
    <section
      className="container mx-auto pt-2 flex flex-col items-center justify-center"
      id="projects"
    >
      <div className="pb-4">
        <h1 className="text-6xl font-semibold text-gray-300 max-sm:text-4xl">
          Projects
        </h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:px-6 max-sm:py-4">
        <div className="rounded-xl bg-slate-700 flex flex-col">
          <div>
            <img
              alt="Project cover"
              height={650}
              width={650}
              src={themeSender}
            />
          </div>
          <div className="flex flex-col items-center justify-center flex-shrink-0 px-4 py-4">
            <h3 className="text-2xl font-bold leading-none">TheMeSender</h3>
            <p className="text-xl leading-normal text-gray-500 dark:text-gray-400">
              ChatApp using MERN and Firebase
            </p>
          </div>
        </div>
        <div className="rounded-lg bg-gray-700 flex flex-col">
          <div>
            <img
              alt="Project cover"
              height={650}
              width={650}
              src={courseSues}
            />
          </div>
          <div className="flex flex-col items-center justify-center flex-shrink-0 px-4 py-4">
            <h3 className="text-2xl font-bold leading-none">CourseSues.io</h3>
            <p className="text-xl leading-normal text-gray-500 dark:text-gray-400">
              Student course reporting system
            </p>
          </div>
        </div>
        <div className="rounded-xl bg-slate-700 flex flex-col">
          <div>
            <img
              alt="Project cover"
              height={650}
              width={650}
              src={weStream}
            />
          </div>
          <div className="flex flex-col items-center justify-center flex-shrink-0 px-4 py-4">
            <h3 className="text-2xl font-bold leading-none">weStream</h3>
            <p className="text-xl leading-normal text-gray-500 dark:text-gray-400">
              Streaming up for realtime long distance streams
            </p>
          </div>
        </div>
        <div className="rounded-xl bg-slate-700 flex flex-col">
          <div>
            <img
              alt="Project cover"
              height={650}
              width={650}
              src={dcs}
            />
          </div>
          <div className="flex flex-col items-center justify-center flex-shrink-0 px-4 py-4">
            <h3 className="text-2xl font-bold leading-none">DCS Website</h3>
            <p className="text-xl leading-normal text-gray-500 dark:text-gray-400">
              Dept. of Computer Sci. Website
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

