import { createBrowserRouter } from "react-router-dom";
import DefaultLayOut from "./defaultlayout";
import Home from "../components/home";
import Error from "../components/error";
import Categories from "../components/categories";
// import Profile from "../components/profile";
import Aboutus from "../components/aboutus";
import Men from "../components/categories/men";
import Women from "../components/categories/women";
import Login from "../components/login/login";
import Signup from "../components/signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayOut />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "categories/men",
        element: <Men />,
      },
      {
        path: "categories/women",
        element: <Women />,
      },
      {
        path: "profile/login",
        element: <Login />,
      },
      {
        path: "aboutus",
        element: <Aboutus />,
      },
    ],
  },
  {
    path: "signup",
    element: <Signup />,
  },
  // {
  //   path: "login",
  //   element: <Login />,
  // },
  {
    path: "*",
    element: <Error />,
  },
]);

export default router;
