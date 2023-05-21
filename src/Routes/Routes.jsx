import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import ToysDetails from "../Pages/ToysDetails/ToysDetails";
import Blog from "../Shared/Blog/Blog";
import AllToys from "../Shared/AllToys/AllToys";
import Addtoys from "../Shared/AddToys/Addtoys";
import MyToys from "../Shared/MyToys/MyToys";
import PrivateRoute from "../Shared/PrivateRoute/PrivateRoute";


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
        path: 'details/:id',
        element: <PrivateRoute><ToysDetails></ToysDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/toys/${params.id}`)
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'allToys',
        element: <AllToys></AllToys>
      }, 
      {
        path: 'addToys',
        element: <Addtoys></Addtoys>
      },
      {
        path: 'myToys',
        element: <MyToys></MyToys>
      },
      //   {
      //     path: ':id',
      //     element:<Category></Category>,
      //     loader:() => fetch(`http://localhost:5000/categories`)
      // }
    ]
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
]);


export default router;