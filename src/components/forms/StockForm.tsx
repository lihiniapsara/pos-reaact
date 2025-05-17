import React, {useState} from "react";

export type StockFormData = {
    name: string;
    price: number;
    quantity: number;
};

type StockFormProps = {
    initialData?: StockFormData,
    onSubmit: (data: StockFormData) => void,
    onCancel: () => void,
};

const validate = (form: StockFormData) => {
    const errors: Partial<StockFormData> = {};
    if (!form.name.trim()) errors.name = "Name is required.";
    if (!form.price) errors.price = 0;
    if (!form.quantity) errors.quantity = 0;
    return errors;
};

const StockForm: React.FC<StockFormProps> = ({
                                                 initialData,
                                                 onSubmit,
                                                 onCancel,
                                             }) => {
    const [form, setForm] = useState<StockFormData>(
        initialData || {name: "", price: 0, quantity: 0}
    );
    const [errors, setErrors] = useState<Partial<StockFormData>>({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({...form, [e.target.name]: e.target.value});
        setErrors((prev) => ({...prev, [e.target.name]: undefined}));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true)
        const newErrors = validate(form);
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            onSubmit(form);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block font-medium mb-1">Name:</label>
                <input
                    name="name"
                    className={`w-full border rounded px-3 py-2 ${
                        errors.name ? "border-red-400" : ""
                    }`}
                    value={form.name}
                    onChange={handleChange}
                    autoFocus
                />
                {submitted && errors.name && (
                    <div className="text-red-500 text-sm mt-1">{errors.name}</div>
                )}
            </div>
            <div>
                <label className="block font-medium mb-1">Price:</label>
                <input
                    name="price"
                    className={`w-full border rounded px-3 py-2 ${
                        errors.price ? "border-red-400" : ""
                    }`}
                    value={form.price}
                    onChange={handleChange}
                />
                {submitted && errors.price && (
                    <div className="text-red-500 text-sm mt-1">{errors.price}</div>
                )}
            </div>
            <div>
                <label className="block font-medium mb-1">Quantity:</label>
                <input
                    name="quantity"
                    className={`w-full border rounded px-3 py-2 ${
                        errors.quantity ? "border-red-400" : ""
                    }`}
                    value={form.quantity}
                    onChange={handleChange}
                />
                {submitted && errors.quantity && (
                    <div className="text-red-500 text-sm mt-1">{errors.quantity}</div>
                )}
            </div>
            <div className="flex justify-end gap-2 pt-2">
                <button
                    type="button"
                    onClick={onCancel}
                    className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
                >Cancel
                </button>
                <button
                    type="submit"
                    className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
                >Save
                </button>
            </div>
        </form>
    );
}

export default StockForm