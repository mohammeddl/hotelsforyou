import { createBrowserRouter } from "react-router-dom";


import GuestLayout from "../layouts/GuestLayout";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";


export const dashboard = "/dashboard";
export const login_route = "/login";
export const router = createBrowserRouter([
    {
        element: <GuestLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
    {
        element: <GuestLayout />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
        ],
    },
   
]);
