import React from "react";
import { FaUserEdit, FaTrash } from "react-icons/fa";
import type {Customer} from "../../types/Customer";

type CustomerTableProps = {
    customers: Customer[];
    onEdit: (customer: Customer) => void;
    onDelete: (customer: Customer) => void;
};

const CustomerTable: React.FC<CustomerTableProps> = ({
                                                         customers,
                                                         onEdit,
                                                         onDelete,
                                                     }) => (
    <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded">
            <thead>
            <tr>
                <th className="px-4 py-2 border-b">ID</th>
                <th className="px-4 py-2 border-b">Name</th>
                <th className="px-4 py-2 border-b">Address</th>
                <th className="px-4 py-2 border-b">Date of Birth</th>
                <th className="px-4 py-2 border-b text-center">Actions</th>
            </tr>
            </thead>
            <tbody>
            {customers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border-b text-center">{customer.id}</td>
                    <td className="px-4 py-2 border-b">{customer.name}</td>
                    <td className="px-4 py-2 border-b">{customer.address}</td>
                    <td className="px-4 py-2 border-b text-center">
                        {new Date(customer.dateOfBirth).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-2 border-b text-center">
                        <button
                            onClick={() => onEdit(customer)}
                            className="inline-flex items-center justify-center p-2 mr-2 rounded bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
                            title="Edit"
                        >
                            <FaUserEdit />
                        </button>
                        <button
                            onClick={() => onDelete(customer)}
                            className="inline-flex items-center justify-center p-2 rounded bg-red-100 text-red-700 hover:bg-red-200"
                            title="Delete"
                        >
                            <FaTrash />
                        </button>
                    </td>
                </tr>
            ))}
            {customers.length === 0 && (
                <tr>
                    <td colSpan={5} className="text-center py-6 text-gray-400">
                        No customers found.
                    </td>
                </tr>
            )}
            </tbody>
        </table>
    </div>
);

export default CustomerTable;
