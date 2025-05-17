import { Link } from "react-router-dom";
import logo from "../assets/easy-pos-logo.svg";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center  px-4">
            <img
                src={logo}
                alt="easy pos logo"
                className="w-100 h-50 mb-6 "
            />
            <h1 className="text-5xl font-extrabold text-blue-700 mb-4">Oops!</h1>
            <p className="text-lg text-gray-600 mb-8">Sorry, the page you’re looking for was not found.</p>
            <Link
                to="/"
                className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-colors"
            >
                Go to Home
            </Link>
        </div>
    );
};

export default ErrorPage;
