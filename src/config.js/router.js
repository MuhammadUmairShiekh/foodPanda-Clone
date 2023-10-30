import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navber from "../component/Navber";
import SignUP from "../component/SignUp";
import SignIN from "../component/SignIn";
import Forget from "../component/Forget";
import SentData from "./SentData";
import ProductMenu from "../component/ProductMenu";
import ProductDetail from "../component/ProductDetail";
// import Body from "../component/Body";

const router = createBrowserRouter([

    {
        path: "/",
        element: <Navber />,

    },
    {
        path: "/City",
        element: <ProductMenu />
    },
     {
        path: "/City/:city_id",
        element: <ProductDetail />
    },


    {
        path: "/SignIn",
        element: <SignIN />
    },
    {
        path: "/SignUp",
        element: <SignUP />
    },
    {
        path: "/Forget",
        element: <Forget />
    },
    {
        path: "/AdminDataUmairShiekh",
        element: <SentData />
    },





])
function Router() {
    return (
        <>
            <RouterProvider router={router} />

        </>
    )
}

export default Router