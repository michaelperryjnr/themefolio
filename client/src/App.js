import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

/** importing all components*/
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Projects from "./Sections/Projects";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import CheckDarkMode from "./scripts/darkmodeConfig"

/**Creating routes */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/home",
    element: <Home></Home>,
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "/projects",
    element: <Projects></Projects>,
  },
  {
    path: "/contact",
    element: <Contact></Contact>,
  },
]);

/**App routing */
function App() {
  CheckDarkMode()
  return (
    <>
      <Nav />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
