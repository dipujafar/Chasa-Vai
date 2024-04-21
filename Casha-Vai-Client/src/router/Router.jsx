import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import SignUp from "../autentication/signUp/SignUp";
import Login from "../autentication/login/Login";
import Contract from "../pages/contract/Contract";
import About from "../pages/about/About";
import BeFarmer from "../pages/beFarmer/BeFarmer";
import Products from "../pages/products/Products";
import Dashboard from "../layout/Dashboard";

import FarmerReq from "../pages/dashboard/farmerReq/FarmerReq";
import Cart from "../pages/dashboard/customer/cart/Cart";
import Payment from "../pages/dashboard/customer/payment/Payment";
import PaymentHistory from "../pages/dashboard/customer/payment/PaymentHistory";
import AllUser from "../pages/dashboard/allUser/AllUser";
import Profile from "../pages/dashboard/profile/Profile";
import AllProducts from "../pages/dashboard/allProduct/AllProducts";


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
      },
      {
        path: "order/:category",
        element: <Products></Products>
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
  },
  {
    path: "dashboard",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Dashboard></Dashboard>,
    children: [
      // admin Routes
      {
        path: "farmerReq",
        element: <FarmerReq></FarmerReq>
      },
      {
        path: "allUsers",
        element: <AllUser></AllUser>
      },
      {
        path:  "allProduct",
        element: <AllProducts></AllProducts>
      },
      // user routes
      {
        path: "cart",
        element: <Cart></Cart>
      },
      {
        path: "payment",
        element: <Payment></Payment>
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path: "profile",
        element: <Profile></Profile>
      }
    ]
  }
]);

export default router;
