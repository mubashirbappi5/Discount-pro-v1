import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Brands from "../Pages/Brands";
import AboutDev from "../Pages/AboutDev";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ErrorPage from "../Pages/ErrorPage";
import Couponpage from "../Pages/Couponpage";
import PrivateRoute from "./PrivateRoute";


const MainRoutes = createBrowserRouter([{
    path: "/",
    element: <Root/>,
    errorElement:<ErrorPage/>,
    children:[{
        path:'/',
        element:<Home/>,
        loader:()=>fetch('/public/Data.json')
    },
    {
        path:"/brands",
        element:<Brands/>,
        loader:()=>fetch('/public/Data.json')
    },
    {
        path:"/about",
        element:<AboutDev/>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/register",
        element:<Register/>
    },
    {
        path:'/brands/:id',
        loader:()=> fetch('/public/Data.json'),
        element:<PrivateRoute><Couponpage/></PrivateRoute>
    }
]
  },])

export default MainRoutes;