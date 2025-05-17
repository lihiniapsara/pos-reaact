import React from 'react';
import { FaUserEdit, FaTrash } from 'react-icons/fa';
import type {Stock} from "../../types/Stock";

type StockTableProps = {
    stocks: Stock[];
    onEdit: (stock: Stock) => void;
    onDelete: (stock: Stock) => void;
};

const StockTable: React.FC<StockTableProps> = ({ stocks, onEdit, onDelete }) => (

        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded">
                <thead>
                <tr>
                    <th className="px-4 py-2 border-b">ID</th>
                    <th className="px-4 py-2 border-b">Name</th>
                    <th className="px-4 py-2 border-b">Quantity</th>
                    <th className="px-4 py-2 border-b">Price</th>
                    <th className="px-4 py-2 border-b text-center">Actions</th>
                </tr>
                </thead>
                <tbody>
                {stocks.map((stock) => (
                    <tr key={stock.id} className="hover:bg-gray-50">
                        <td className="px-4 py-2 border-b text-center">{stock.id}</td>
                        <td className="px-4 py-2 border-b">{stock.name}</td>
                        <td className="px-4 py-2 border-b">{stock.quantity}</td>
                        <td className="px-4 py-2 border-b">{stock.price}</td>
                        <td className="px-4 py-2 border-b text-center">
                            <button
                                className="text-blue-500 hover:text-blue-700 mr-2"
                                onClick={() => onEdit(stock)}
                            >
                                <FaUserEdit />
                            </button>
                            <button
                                className="text-red-500 hover:text-red-700"
                                onClick={() => onDelete(stock)}
                            >
                                <FaTrash />
                            </button>
                        </td>
                    </tr>
                ))}
                {stocks.length === 0 && (
                    <tr>
                        <td colSpan={6} className="px-4 py-2 border-b text-center">
                            No stocks found.
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
);

export default StockTable;
