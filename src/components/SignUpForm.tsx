import { useState } from "react";

interface SignUpFormData {
    name: string;
    email: string;
    password: string;
}

interface SignUpFormErros {
    nameError?: string
    emailError?: string
    passwordError?: string
}

const SignUpForm = () => {
    const [signUpFormData, setSignUpFormData] = useState<SignUpFormData>({
        name: "",
        email: "",
        password: "",
    });

    const [formErrors, setFormErrors] = useState<SignUpFormErros>({})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target

        setSignUpFormData(prevState => ({
            ...prevState, [name]: value
        }))

        setFormErrors({})
    };

    const validate = (): SignUpFormErros => {
        const newErrors: SignUpFormErros = {};

        if(signUpFormData.name.trim().length === 0) {
            newErrors.nameError = "Name is required"
        }

        if(signUpFormData.password.length < 6) {
            newErrors.passwordError = "Password should be longer than 5"
        }

        setFormErrors(newErrors)
        return newErrors
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const erros = validate()
        if(Object.keys(erros).length === 0)
            console.log(signUpFormData)

    }

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>

            <div className="mb-4">
                <label
                    htmlFor="name"
                    className="block text-gray-700 text-sm font-medium mb-2"
                >
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    value={signUpFormData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {formErrors.nameError && <p>{formErrors.nameError}</p>}
            </div>

            <div className="mb-4">
                <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-medium mb-2"
                >
                    Email
                </label>
                <input
                    type="text"
                    name="email"
                    required
                    value={signUpFormData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-6">
                <label
                    htmlFor="password"
                    className="block text-gray-700 text-sm font-medium mb-2"
                >
                    Password
                </label>
                <input
                    type="password"
                    name="password"
                    required
                    value={signUpFormData.password}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {formErrors.passwordError && <p>{formErrors.passwordError}</p>}
            </div>

            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                Sign Up
            </button>
        </form>
    );
};

export default SignUpForm;
