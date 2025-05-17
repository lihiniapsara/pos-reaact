import React, { useReducer, useState } from "react";
import { FaPlus } from "react-icons/fa";
import StockForm, { type StockFormData } from "../components/forms/StockForm";
import StockTable from "../components/tables/StockTable";
import Dialog from "../components/Dialog";
import stockReducer from "../reducers/stock-reducer";

// Define Stock type
export type Stock = {
    id: number;
    name: string;
    price: number;
    quantity: number;
};

const initialStocks: Stock[] = [
    { id: 1, name: "Apple", price: 10, quantity: 100},
    { id: 2, name: "Banana", price: 5, quantity: 50},
    { id: 3, name: "Orange", price: 8, quantity: 80 },
    { id: 4, name: "Mango", price: 12, quantity: 120},
    { id: 5, name: "Pineapple", price: 15, quantity: 150},
];

const StockPage: React.FC = () => {
    const [stocks, dispatch] = useReducer(stockReducer, initialStocks);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [editingStock, setEditingStock] = useState<Stock | null>(null);

    const handleAdd = () => {
        setEditingStock(null);
        setDialogOpen(true);
    };

    const handleEdit = (stock: Stock) => {
        setEditingStock(stock);
        setDialogOpen(true);
    };

    const handleDelete = (stock: Stock) => {
        if (window.confirm("Are you sure you want to delete this stock?")) {
            dispatch({ type: "DELETE", payload: stock.id });
        }
    };

    const handleSave = (data: StockFormData) => {

        if (editingStock) {
            dispatch({
                type: "UPDATE",
                payload: { ...editingStock, ...data },
            });
        } else {
            const newId =
                stocks.length > 0 ? Math.max(...stocks.map((s) => s.id)) + 1 : 1;
            dispatch({
                type: "ADD",
                payload: { id: newId, ...data},
            });
        }

        setDialogOpen(false);
        setEditingStock(null);
    };

    const handleCancel = () => {
        setDialogOpen(false);
        setEditingStock(null);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-8">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                     <h1 className="text-2xl font-semibold mb-4">Stock Management</h1>
                     <button
                         className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                         onClick={handleAdd}
                >
                    <FaPlus  />
                    Add Stock
                </button>
            </div>

            <StockTable stocks={stocks} onEdit={handleEdit} onDelete={handleDelete} />
            </div>
            <Dialog
                isOpen={dialogOpen}
                title={editingStock ? "Edit Stock" : "Add Stock"}
                onCancel={handleCancel}
            >
                <StockForm
                    initialData={
                        editingStock
                            ? {
                                name: editingStock.name,
                                price: editingStock.price,
                                quantity: editingStock.quantity,
                            }
                            : undefined

                    }
                    onSubmit={handleSave}
                    onCancel={handleCancel}
                />
            </Dialog>
        </div>
    );
};

export default StockPage;
