import React, {useReducer, useState} from "react";
import { FaPlus } from "react-icons/fa";
import CustomerForm, {type CustomerFormData} from "../components/forms/CustomerForm";
import CustomerTable from "../components/tables/CustomerTable";
import Dialog from "../components/Dialog";
import customerReducer from "../reducers/customer-reducer";

// Customer type
export type Customer = {
    id: number;
    name: string;
    address: string;
    dateOfBirth: string;
};

const initialCustomers: Customer[] = [
    {
        id: 1,
        name: "Alice Smith",
        address: "123 Main St, Springfield",
        dateOfBirth: "1990-04-12",
    },
    {
        id: 2,
        name: "Bob Johnson",
        address: "456 Elm St, Shelbyville",
        dateOfBirth: "1985-11-23",
    },
];

const CustomerPage: React.FC = () => {
    const [customers, dispatch] = useReducer(customerReducer, initialCustomers);

    // UI state
    const [dialogOpen, setDialogOpen] = useState(false);
    const [editingCustomer, setEditingCustomer] = useState<Customer | null>(null);

    const handleAdd = () => {
        setEditingCustomer(null);
        setDialogOpen(true);
    };

    const handleEdit = (customer: Customer) => {
        setEditingCustomer(customer);
        setDialogOpen(true);
    };

    const handleDelete = (customer: Customer) => {
        if (window.confirm("Are you sure you want to delete this customer?")) {
            dispatch({ type: "DELETE", payload: customer.id });
        }
    };

    const handleSave = (data: CustomerFormData) => {
        if (editingCustomer) {
            dispatch({
                type: "UPDATE",
                payload: { ...editingCustomer, ...data },
            });
        } else {
            dispatch({
                type: "ADD",
                payload: data,
            });
        }
        setDialogOpen(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-8">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold text-blue-700">Customers</h1>
                    <button
                        onClick={handleAdd}
                        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                    >
                        <FaPlus /> Add Customer
                    </button>
                </div>
                <CustomerTable
                    customers={customers}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            </div>
            <Dialog
                isOpen={dialogOpen}
                title={editingCustomer ? "Edit Customer" : "Add Customer"}
                onCancel={() => setDialogOpen(false)}
            >
                <CustomerForm
                    initialData={
                        editingCustomer
                            ? {
                                name: editingCustomer.name,
                                address: editingCustomer.address,
                                dateOfBirth: editingCustomer.dateOfBirth,
                            }
                            : undefined
                    }
                    onSubmit={handleSave}
                    onCancel={() => setDialogOpen(false)}
                />
            </Dialog>
        </div>
    );
};

export default CustomerPage;
