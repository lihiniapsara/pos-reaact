import {createBrowserRouter} from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import CustomerPage from "./pages/CustomerPage";
import StockPage from "./pages/StockPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            {path: '/', element: <HomePage/>},
            {path: '/about', element: <AboutPage/>},
            {path: '/contact', element: <ContactPage/>},
            {path: '/login', element: <LoginPage/>},
            {path: '/dashboard', element: <DashboardPage/>},
            {path: '/dashboard/customers', element: <CustomerPage/>},
            {path: '/dashboard/stocks', element: <StockPage/>},
        ]
    }
])

export default router