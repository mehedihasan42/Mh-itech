import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/Home/About/About";
import Services from "../Pages/Home/Services/Services";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path:"/about",
      element:<About></About>
    },
    {
      path:"/services",
      element:<Services></Services>
    }
  ]);