import { createBrowserRouter, Navigate} from "react-router-dom";

import Home from "../layouts/Home";
import CategoryNews from "../pages/CategoryNews";
import AuthLaout from "../layouts/AuthLaout";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>, 
    children:[
      {
        path:"/",
        element:<Navigate to={"/category/01"}></Navigate>,
      },
      {
        path:"/category/:id",
        element:<CategoryNews></CategoryNews>,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/news",
    element: <h1>News Layout</h1>,
  },
  {
    path: "/auth",
    element: <AuthLaout></AuthLaout>,
    children:[
      {
        path:"/auth/login",
        element:<Login></Login>
      },
      {
        path:"/auth/register",
        element:<Register></Register>
      }
    ]
  },
  {
    path: "*",
    element: <h1>Error</h1>,
  },

  

  
]);

export default router;
