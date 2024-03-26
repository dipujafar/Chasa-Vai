import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import SignUp from "../autentication/signUp/SignUp";
import Login from "../autentication/login/Login";
import Contract from "../pages/contract/Contract";


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
