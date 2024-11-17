import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Brands from "../Pages/Brands";
import AboutDev from "../Pages/AboutDev";


const MainRoutes = createBrowserRouter([{
    path: "/",
    element: <Root/>,
    children:[{
        path:'/',
        element:<Home/>
    },
    {
        path:"/brands",
        element:<Brands/>
    },
    {
        path:"/about",
        element:<AboutDev/>
    }
]
  },])

export default MainRoutes;