import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import SignUp from "../autentication/signUp/SignUp";
import Login from "../autentication/login/Login";
import Contract from "../pages/contract/Contract";
import About from "../pages/about/About";
import BeFarmer from "../pages/beFarmer/BeFarmer";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "contract",
        element: <Contract></Contract>
      },
      {
        path: "about",
        element: <About></About>
      },
      {
        path: "beFarmer",
        element: <BeFarmer></BeFarmer>
      }
    ]
  },
  {
    path: '/signUp',
    element: <SignUp></SignUp>,
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path: '/login',
    element: <Login></Login>,
    errorElement: <ErrorPage></ErrorPage>
  }
]);

export default router;
