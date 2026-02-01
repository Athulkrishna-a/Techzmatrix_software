import { createBrowserRouter } from "react-router-dom";
import Home from "../features/home/Home.jsx";
import MainLayout from "../layouts/MainLayout.jsx";
import NotFound from "../features/error/Notfound.jsx";
import ContactUs from "../features/contact/ContactUs.jsx";
import Aboutus from "../features/about/Aboutus.jsx";
import Career from "../features/about/pages/Career.jsx";
import LifeAtTechzmatrix from "../features/about/pages/LifeAtTechzmatrix.jsx";
import Webdevelop from "../features/services/pages/Webdevelopment/Webdevelop.jsx";
import AppDevelop from "../features/services/pages/appdevelopement/AppDevelop.jsx";
import Clouddevelop from "../features/services/pages/clouddevelopment/Clouddevelop.jsx";
import EmployeeLogin from "../features/auth/EmployeeLogin.jsx";

export const AppRouter= createBrowserRouter([
    {
         path: "/",
        element: <MainLayout/>,
        errorElement: <NotFound/>,
        children:[
            {
                index: true,
                element: <Home/>
            },
            {
                path:"/contact",
                element:<ContactUs/>
            },
            {
                path:"/about",
                element:<Aboutus/>
            },
            {
                path:"/careers",
                element:<Career/>
            }
            ,{
                path:"/LifeAtTechzmatrix",
                element:<LifeAtTechzmatrix/>
            },
            {
                path:"/services/Webdevelopment",
                element:<Webdevelop/>
            },
             {
                path:"/services/Appdevelopment",
                element:<AppDevelop/>
            },
            {
                path:"/services/CloudDevelopment",
                element:<Clouddevelop/>
            },
            {
                path:"/login/EmployeeLogin",
                element:<EmployeeLogin/>
            }
            
        ]
    }
])
