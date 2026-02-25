import { createBrowserRouter } from "react-router-dom";
import Home from "../features/home/Home.jsx";
import MainLayout from "../layouts/MainLayout.jsx";
import NotFound from "../features/error/Notfound.jsx";
import ContactUs from "../features/contact/ContactUs.jsx";
import Aboutus from "../features/about/aboutus/Aboutus.jsx";
import LifeAtTechzmatrix from "../features/about/lifeAt/LifeAtTechzmatrix.jsx";
import Webdevelop from "../features/services/Webdevelopment/Webdevelop.jsx";
import AppDevelop from "../features/services/appdevelopement/AppDevelop.jsx";
import Clouddevelop from "../features/services/clouddevelopment/Clouddevelop.jsx";
import EmployeeLogin from "../features/auth/EmployeeLogin.jsx";
import AuthLayout from "../layouts/AuthLayout.jsx";
import EmployeeSignup from "../features/auth/EmployeeSignup.jsx"
import JobInfo from "../features/about/career/pages/JobsInfo.jsx";
import Careers from "../features/about/career/Careers.jsx";
import ForgotPassword from "../features/auth/ForgotPassword.jsx";
import EmployeeBoard from "../features/dashboard/EmployeeBoard.jsx";
import AdminBoard from "../features/dashboard/AdminBoard.jsx";
import ResetPassword from "../features/auth/ResetPassword.jsx";
import VerifyResetCode from "../features/auth/VerifyResetCode.jsx";

export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/contact",
                element: <ContactUs />
            },
            {
                path: "/about",
                element: <Aboutus />
            },
            {
                path: "/LifeAtTechzmatrix",
                element: <LifeAtTechzmatrix />
            },
            {
                path: "/services/Webdevelopment",
                element: <Webdevelop/>
            },
            {
                path: "/services/Appdevelopment",
                element: <AppDevelop />
            },
            {
                path: "/services/CloudDevelopment",
                element: <Clouddevelop />
            },
            {
                path: "/careers",
                element: <Careers />
            },
            {
                path:
                    "/careers/:jobId",
                element: <JobInfo />
            }

        ]
    },
    {
        path: "/login",
        element: <AuthLayout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "EmployeeLogin",
                element: <EmployeeLogin />
            },
            {
                path: "EmployeeSignup",
                element: <EmployeeSignup />
            },
            {
                path: "ForgotPassword",
                element: <ForgotPassword/>
            },
            {
                path:"EmployeeBoard",
                element:<EmployeeBoard/>
            },
              {
                path:"Adminboard",
                element:<AdminBoard/>
            },
            {
                path:"ResetPassword",
                element:<ResetPassword/>
            },
            {
                path:"VerifyResetCode",
                element:<VerifyResetCode/>
            }
        ],
    }

]);
