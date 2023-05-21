import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import ToysDetails from "../Pages/ToysDetails/ToysDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>
      },
      {
        path:'details/:id',
        element:<ToysDetails></ToysDetails>,
        loader:({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
      }
      //   {
      //     path: ':id',
      //     element:<Category></Category>,
      //     loader:({params}) => fetch(`https://recipe-hub-server-bka3670-gmailcom.vercel.app/categories/${params.id}`)
      // }
    ]
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
]);


export default router;