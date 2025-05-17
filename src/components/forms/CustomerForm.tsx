import React, { useState } from "react";

export type CustomerFormData = {
    name: string;
    address: string;
    dateOfBirth: string;
};

type CustomerFormProps = {
    initialData?: CustomerFormData;
    onSubmit: (data: CustomerFormData) => void;
    onCancel: () => void;
};

const validate = (form: CustomerFormData) => {
    const errors: Partial<CustomerFormData> = {};
    if (!form.name.trim()) errors.name = "Name is required.";
    if (!form.address.trim()) errors.address = "Address is required.";
    if (!form.dateOfBirth) errors.dateOfBirth = "Date of birth is required.";
    return errors;
};

const CustomerForm: React.FC<CustomerFormProps> = ({
                                                       initialData,
                                                       onSubmit,
                                                       onCancel,
                                                   }) => {
    const [form, setForm] = useState<CustomerFormData>(
        initialData || { name: "", address: "", dateOfBirth: "" }
    );

    const [errors, setErrors] = useState<Partial<CustomerFormData>>({});
    const [submitted, setSubmitted] = useState(false);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        const validationErrors = validate(form);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            onSubmit(form);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block font-medium mb-1">Name</label>
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
                <label className="block font-medium mb-1">Address</label>
                <input
                    name="address"
                    className={`w-full border rounded px-3 py-2 ${
                        errors.address ? "border-red-400" : ""
                    }`}
                    value={form.address}
                    onChange={handleChange}
                />
                {submitted && errors.address && (
                    <div className="text-red-500 text-sm mt-1">{errors.address}</div>
                )}
            </div>
            <div>
                <label className="block font-medium mb-1">Date of Birth</label>
                <input
                    type="date"
                    name="dateOfBirth"
                    className={`w-full border rounded px-3 py-2 ${
                        errors.dateOfBirth ? "border-red-400" : ""
                    }`}
                    value={form.dateOfBirth}
                    onChange={handleChange}
                />
                {submitted && errors.dateOfBirth && (
                    <div className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</div>
                )}
            </div>
            <div className="flex justify-end gap-2 pt-2">
                <button
                    type="button"
                    onClick={onCancel}
                    className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
                >
                    Save
                </button>
            </div>
        </form>
    );
};

export default CustomerForm;
