import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import LandingPage from "../pages/LandingPage";
import About from "../pages/About";

const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "/",
                element : <LandingPage/>
            },
            {
                path : "/about-us",
                element : <About/>
            }
        ]
    }
])