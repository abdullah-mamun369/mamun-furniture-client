
import Products from "../../Pages/Products/Products";

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
                path: '/categories/:id',
                element: <Products></Products>
            }
        ]
    }
])

export default router;