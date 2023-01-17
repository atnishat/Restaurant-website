import { createBrowserRouter } from "react-router-dom";
import Main from "../component/Layouts/Main";
import Home from "../component/Pages/Home/Home";
import Reservation from "../component/Pages/Reservation/Reservation/Reservation";
import  Login  from "../component/Pages/Login/Login";



export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/reservation',
                element:<Reservation></Reservation>
            }
            ,
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    }
])