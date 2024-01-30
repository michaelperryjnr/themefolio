import React from "react";


export default function ToogleTest() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <a
          href="/"
          className="block max-w-sm p-6 bg-white border-gray-200 rounded-lg shadow hover:bg-gray-600 dark:border-gray-700 dark:hover:bg-gray-600"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-yellow-700">
            Quote
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            This is the TheMeFolio
          </p>
        </a>
        <button
          id="theme-toggle"
          type="button"
          className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
        >
          <img
            src=""
            alt=""
            id="theme-toggle-dark-icon"
            className="bg-blue-600 hidden w-5 h-5"
          />
          <img
            src=""
            alt=""
            id="theme-toggle-light-icon"
            className="bg-red hidden w-5 h-5"
          />
        </button>
      </div>
    </>
  );
}
