import React from "react";
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom"

/** importing all components*/
import Header from "./Components/Header";



/**Creating routes */
const router = createBrowserRouter([
  {
    path: "/",
    element :<Header></Header>
  }
])


/**App routing */
function App() {
  return(
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App;
