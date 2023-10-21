import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navber from "../component/Navber";
import SignUP from "../component/SignUp";
import SignIN from "../component/SignIn";

const router = createBrowserRouter([

    {
        path: "/",
        element: <Navber />,
        children: [
            {
                path: "/SignIn",
                element: <SignIN />
            },
            {
                path: "/SignUp",
                element: <SignUP />
            }

        ]

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