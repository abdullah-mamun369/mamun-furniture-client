
import AddProduct from "../../Pages/AddProduct/AddProduct";
import AdminDashBoard from "../../Pages/AdminDashboard/AdminDashBoard";
import BuyerDashboard from "../../Pages/BuyerDashboard/BuyerDashboard";
import Login from "../../Pages/Login/Login";
import Products from "../../Pages/Products/Products";
import SellerDashoard from "../../Pages/SellerDashboard/SellerDashoard";
import SignUp from "../../Pages/SignUp/SignUp";

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
                    return fetch('http://localhost:7000/categories');
                },
                element: <Home></Home>
            },
            {
                path: '/categories/:category',
                element: <Products></Products>,
                loader: async ({ params }) => {
                    return fetch(`http://localhost:7000/categories/${params.category}`);
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
                element: <AddProduct></AddProduct>
            },
            {
                path: '/seller/dashboard',
                element: <SellerDashoard></SellerDashoard>
            },
            {
                path: '/buyer/dashboard',
                element: <BuyerDashboard></BuyerDashboard>
            },
            {
                path: '/admin/dashboard',
                element: <AdminDashBoard></AdminDashBoard>
            },
        ]
    }
])

export default router;