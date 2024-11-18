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
    }
]
  },])

export default MainRoutes;