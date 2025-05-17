import { useNavigate } from "react-router-dom";
import { FaUsers, FaBoxes, FaShoppingCart } from "react-icons/fa";

const DashboardPage = () => {
    const navigate = useNavigate();

    const actions = [
        {
            label: "Customers",
            icon: <FaUsers className="w-8 h-8 mb-2" />,
            color: "from-blue-500 to-blue-700",
            to: "customers",
        },
        {
            label: "Stocks",
            icon: <FaBoxes className="w-8 h-8 mb-2" />,
            color: "from-green-500 to-green-700",
            to: "stocks",
        },
        {
            label: "Orders",
            icon: <FaShoppingCart className="w-8 h-8 mb-2" />,
            color: "from-yellow-500 to-yellow-700",
            to: "orders",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center px-4">
            <h1 className="text-4xl font-extrabold text-blue-700 mb-10 drop-shadow-lg">
                Dashboard
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-3xl">
                {actions.map((action) => (
                    <button
                        key={action.label}
                        onClick={() => navigate(action.to)}
                        className={`flex flex-col items-center justify-center py-8 rounded-xl shadow-lg bg-gradient-to-br ${action.color} text-white font-semibold text-xl transition-transform transform hover:-translate-y-2 hover:shadow-2xl focus:outline-none`}
                    >
                        {action.icon}
                        {action.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default DashboardPage;
