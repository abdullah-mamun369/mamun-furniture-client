import AllBuyers from "../../Pages/AdminDashboard/AllBuyers";
import AllSellers from "../../Pages/AdminDashboard/AllSellers";
import ReportedItems from "../../Pages/AdminDashboard/ReportedItems";
import Blog from "../../Pages/Blog/Blog";
import Login from "../../Pages/Login/Login";
import Products from "../../Pages/Products/Products";
import AddProduct from "../../Pages/SellerDashboard/AddProduct";
import MyProducts from "../../Pages/SellerDashboard/MyProducts";
import SignUp from "../../Pages/SignUp/SignUp";
import error404 from "../../assets/404.jpg"
import MyBookings from "../../Pages/BuyerDashboard/MyBookings";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";




const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Home } = require("../../Pages/Home/Home");


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: async () => {
                    return fetch('https://furniture-server.vercel.app/categories');
                },
                element: <Home></Home>
            },
            {
                path: '/categories/:category',
                element: <PrivateRoutes><Products></Products></PrivateRoutes>,
                loader: async ({ params }) => {
                    return fetch(`https://furniture-server.vercel.app/categories/${params.category}`);
                },
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/addproduct',
                element: <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>
            },
            {
                path: '/myproducts',
                element: <PrivateRoutes><MyProducts></MyProducts></PrivateRoutes>
            },
            {
                path: '/allsellers',
                element: <PrivateRoutes><AllSellers></AllSellers></PrivateRoutes>
            },
            {
                path: '/allbuyers',
                element: <PrivateRoutes><AllBuyers></AllBuyers></PrivateRoutes>
            },
            {
                path: '/reported',
                element: <PrivateRoutes><ReportedItems></ReportedItems></PrivateRoutes>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/mybookings',
                element: <PrivateRoutes><MyBookings></MyBookings></PrivateRoutes>
            },
            {
                path: '/buyers',
                element: <PrivateRoutes><AllBuyers></AllBuyers></PrivateRoutes>
            },
            {
                path: '/sellers',
                element: <PrivateRoutes><AllSellers></AllSellers></PrivateRoutes>
            },

        ]
    },
    {
        path: '*',
        element: <div className='vh-100 d-flex flex-column justify-content-center align-items-center'>
            <div className="App">
                <header className="App-header">
                    <img src={error404} className="h-[200px]" alt="" />
                    <h2 className='text-secondary mt-9'>Please type a right address...</h2>
                </header>
            </div>
        </div>
    }
])

export default router;