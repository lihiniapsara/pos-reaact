import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/easy-pos-logo.svg";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        { to: "/", label: "Home" },
        { to: "/about", label: "About" },
        { to: "/contact", label: "Contact" },
    ];

    const isActive = (path: string) =>
        location.pathname === path ||
        (path !== "/" && location.pathname.startsWith(path));

    return (
        <nav className="relative bg-white shadow-md px-6 py-3 flex items-center">
            {/* Logo on the left */}
            <div className="flex-shrink-0">
                <img
                    src={logo}
                    height={150}
                    width={150}
                    alt="easy pos logo"
                    className="object-contain"
                />
            </div>

            {/* Centered navigation links */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="flex space-x-8 text-gray-700 font-medium">
                    {navItems.map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            className={`transition-colors duration-300 px-2 py-1 rounded ${
                                isActive(item.to)
                                    ? "text-blue-700 font-bold bg-blue-100"
                                    : "hover:text-blue-600"
                            }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Login and Dashboard buttons on the right */}
            <div className="ml-auto space-x-1">
                <button
                    onClick={() => navigate("/dashboard")}
                    className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-300"
                >
                    Dashboard
                </button>
                <button
                    onClick={() => navigate("/login")}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                    Login
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
