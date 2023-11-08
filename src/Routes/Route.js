import { createBrowserRouter } from "react-router-dom";
import Main from "../component/Layouts/Main";
import Home from "../component/Pages/Home/Home";
import Reservation from "../component/Pages/Reservation/Reservation/Reservation";
import  Login  from "../component/Pages/Login/Login";
import Signup from "../component/Pages/Signup/Signup";
import Dashboard from "../component/Pages/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import DashboardLayOut from "../component/Layouts/DashboardLayout/DashboardLayOut";
import MyReservation from "../component/Pages/Dashboard/MyReservation/MyReservation";
import AllUser from "../component/Pages/Dashboard/AllUser/AllUser";
import UseAdmin from "../hooks/UseAdmin";
import AdminRoute from "./AdminRoute";
import AddMenu from "../component/Pages/Dashboard/AddMenu/AddMenu";
import SpecialMenu from "../component/Pages/Dashboard/Dashboard/SpecialMenu/SpecialMenu";
import About from "../component/Pages/About/About";
import AllBookings from "../component/Pages/Dashboard/AllBookings/AllBookings"
import Menu from "../component/Pages/Menu/Menu";
import Payment from "../component/Pages/Dashboard/Payment/Payment";
import Contact from "../component/Pages/Shared/Contract/Contact";
import Profile from "../component/Pages/Shared/Profile/Profile";
import AllPayment from "../component/Pages/Dashboard/AllPayment/AllPayment";


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
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            }
            ,
            {
                path:'/about',
                element:<About></About>
            }
            ,
            {
                path:'/specialmenu',
                element:<Menu></Menu>
            }
            ,
            {
                path:'/contract',
                element:<Contact></Contact>
            }
            ,
            {
                path:'/profile',
                element:<Profile></Profile>
            }
            
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayOut></DashboardLayOut></PrivateRoute>,
        children:[
            {
                path:'/dashboard',
                element:<MyReservation></MyReservation>
            }
             ,{
                   path:'/dashboard/allusers',
                element:<AdminRoute><AllUser></AllUser></AdminRoute>
            },
            {
                   path:'/dashboard/addmenu',
                element:<AdminRoute><AddMenu></AddMenu></AdminRoute>
            }
            ,{
                   path:'/dashboard/specialmenu',
                element:<AdminRoute><SpecialMenu></SpecialMenu></AdminRoute>
            }
            ,{
                   path:'/dashboard/allbookings',
                element:<AdminRoute><AllBookings></AllBookings></AdminRoute>
            }
            ,{
                   path:'/dashboard/allpayments',
                element:<AdminRoute><AllPayment></AllPayment></AdminRoute>
            }
            ,{
                   path:'/dashboard/payment/:id',
                element:<Payment></Payment>,
                loader:({params}) => fetch(`http://localhost:5000/allbookings/${params.id}`)
            }
        ]
    }
])


// payment remove priveroute 