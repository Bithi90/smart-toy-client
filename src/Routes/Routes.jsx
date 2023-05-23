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
import Category from "../Pages/Home/Category/Category";




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
        loader: ({ params }) => fetch(`https://smart-toy-store-server.vercel.app/toys/${params.id}`)
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
        element: <PrivateRoute><Addtoys></Addtoys></PrivateRoute>
      },
      {
        path: 'myToys',
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
          path: 'category/:id',
          element:<Category></Category>    
      }
      
    
    ]
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
]);


export default router;