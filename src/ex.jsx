import { useState, useEffect } from 'react';
import { ShoppingCart, Package, DollarSign, Plus, Minus, Trash2 } from 'lucide-react';

// Example product data
const initialProducts = [
    { id: 1, name: 'T-Shirt', price: 19.99, image: '/api/placeholder/80/80', category: 'Clothing', stock: 25 },
    { id: 2, name: 'Jeans', price: 39.99, image: '/api/placeholder/80/80', category: 'Clothing', stock: 15 },
    { id: 3, name: 'Sneakers', price: 59.99, image: '/api/placeholder/80/80', category: 'Footwear', stock: 10 },
    { id: 4, name: 'Backpack', price: 29.99, image: '/api/placeholder/80/80', category: 'Accessories', stock: 8 },
    { id: 5, name: 'Hat', price: 14.99, image: '/api/placeholder/80/80', category: 'Accessories', stock: 20 },
    { id: 6, name: 'Socks', price: 9.99, image: '/api/placeholder/80/80', category: 'Clothing', stock: 30 },
];

export default function POSSystem() {
    const [products, setProducts] = useState(initialProducts);
    const [cart, setCart] = useState([]);
    const [categories, setCategories] = useState(['All']);
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
    const [paymentAmount, setPaymentAmount] = useState('');

    // Extract unique categories
    useEffect(() => {
        const uniqueCategories = ['All', ...new Set(products.map(p => p.category))];
        setCategories(uniqueCategories);
    }, [products]);

    // Filter products based on category and search
    const filteredProducts = products.filter(product => {
        const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Add product to cart
    const addToCart = (product) => {
        if (product.stock <= 0) {
            alert('This item is out of stock');
            return;
        }

        const existingItem = cart.find(item => item.id === product.id);

        if (existingItem) {
            if (existingItem.quantity >= product.stock) {
                alert('Cannot add more of this item - not enough stock');
                return;
            }
            setCart(cart.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    // Update cart item quantity
    const updateQuantity = (id, change) => {
        const updatedCart = cart.map(item => {
            if (item.id === id) {
                const product = products.find(p => p.id === id);
                const newQuantity = item.quantity + change;

                if (change > 0 && newQuantity > product.stock) {
                    alert('Cannot add more of this item - not enough stock');
                    return item;
                }

                return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
            }
            return item;
        }).filter(Boolean);

        setCart(updatedCart);
    };

    // Remove item from cart
    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    // Calculate cart total
    const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Process checkout
    const handleCheckout = () => {
        if (cart.length === 0) {
            alert('Cart is empty');
            return;
        }

        const payment = parseFloat(paymentAmount);

        if (isNaN(payment) || payment < cartTotal * 1.1) {
            alert('Please enter a valid payment amount');
            return;
        }

        const change = payment - (cartTotal * 1.1);

        // Update product stock
        const updatedProducts = products.map(product => {
            const cartItem = cart.find(item => item.id === product.id);
            if (cartItem) {
                return { ...product, stock: product.stock - cartItem.quantity };
            }
            return product;
        });
        setProducts(updatedProducts);

        alert(`Payment successful! Change: $${change.toFixed(2)}`);

        // Reset state
        setCart([]);
        setIsCheckoutModalOpen(false);
        setPaymentAmount('');
    };

    return (
        <div className="flex flex-col h-screen bg-gray-100">
            {/* Header */}
            <header className="bg-blue-600 text-white p-4 shadow-md">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold">POS System</h1>
                    <div className="flex space-x-4">
            <span className="flex items-center">
              <Package className="mr-1" size={18} />
                {products.length} Products
            </span>
                        <span className="flex items-center">
              <ShoppingCart className="mr-1" size={18} />
                            {cart.length} Items
            </span>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="flex flex-1 overflow-hidden">
                {/* Products Section */}
                <div className="w-2/3 p-4 flex flex-col">
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full p-2 border rounded mb-2"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <div className="flex space-x-2 overflow-x-auto pb-2">
                            {categories.map(category => (
                                <button
                                    key={category}
                                    className={`px-3 py-1 rounded-full ${
                                        activeCategory === category
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-gray-200 text-gray-800'
                                    }`}
                                    onClick={() => setActiveCategory(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 overflow-y-auto flex-1">
                        {filteredProducts.map(product => (
                            <div
                                key={product.id}
                                className="bg-white p-4 rounded-lg shadow cursor-pointer hover:shadow-lg transition-shadow"
                                onClick={() => addToCart(product)}
                            >
                                <div className="flex justify-center mb-2">
                                    <img src={product.image} alt={product.name} className="h-20 w-20 object-cover" />
                                </div>
                                <h3 className="font-medium text-center">{product.name}</h3>
                                <p className="text-blue-600 font-bold text-center">${product.price.toFixed(2)}</p>
                                <div className="mt-2 flex justify-between items-center">
                                    <span className="bg-gray-100 text-xs px-2 py-1 rounded-full">{product.category}</span>
                                    <span
                                        className={`text-xs px-2 py-1 rounded-full ${
                                            product.stock > 10
                                                ? 'bg-green-100 text-green-800'
                                                : product.stock > 0
                                                    ? 'bg-yellow-100 text-yellow-800'
                                                    : 'bg-red-100 text-red-800'
                                        }`}
                                    >
                    Stock: {product.stock}
                  </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Cart Section */}
                <div className="w-1/3 bg-white border-l shadow-inner flex flex-col">
                    <div className="p-4 bg-gray-50 border-b">
                        <h2 className="text-lg font-bold flex items-center">
                            <ShoppingCart className="mr-2" size={20} />
                            Current Order
                        </h2>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4">
                        {cart.length === 0 ? (
                            <div className="text-center text-gray-500 mt-8">
                                Cart is empty. Add products to begin.
                            </div>
                        ) : (
                            cart.map(item => (
                                <div key={item.id} className="flex items-center justify-between border-b py-2">
                                    <div className="flex items-center">
                                        <img src={item.image} alt={item.name} className="h-10 w-10 object-cover mr-2" />
                                        <div>
                                            <h4 className="font-medium">{item.name}</h4>
                                            <p className="text-sm text-gray-600">${item.price.toFixed(2)} × {item.quantity}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <button
                                            className="text-gray-500 hover:text-gray-700 p-1"
                                            onClick={() => updateQuantity(item.id, -1)}
                                        >
                                            <Minus size={16} />
                                        </button>
                                        <span className="w-8 text-center">{item.quantity}</span>
                                        <button
                                            className="text-gray-500 hover:text-gray-700 p-1"
                                            onClick={() => updateQuantity(item.id, 1)}
                                        >
                                            <Plus size={16} />
                                        </button>
                                        <button
                                            className="text-red-500 hover:text-red-700 p-1 ml-2"
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="p-4 bg-gray-50 border-t">
                        <div className="flex justify-between mb-2">
                            <span>Subtotal:</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span>Tax (10%):</span>
                            <span>${(cartTotal * 0.1).toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg">
                            <span>Total:</span>
                            <span>${(cartTotal * 1.1).toFixed(2)}</span>
                        </div>
                        <button
                            className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center disabled:bg-gray-400"
                            disabled={cart.length === 0}
                            onClick={() => setIsCheckoutModalOpen(true)}
                        >
                            <DollarSign className="mr-2" size={20} />
                            Checkout
                        </button>
                    </div>
                </div>
            </div>

            {/* Checkout Modal */}
            {isCheckoutModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                        <h2 className="text-xl font-bold mb-4">Complete Payment</h2>
                        <div className="mb-4">
                            <div className="flex justify-between mb-2">
                                <span>Total Due:</span>
                                <span className="font-bold">${(cartTotal * 1.1).toFixed(2)}</span>
                            </div>
                            <label className="block mb-2">Payment Amount:</label>
                            <input
                                type="number"
                                className="w-full p-2 border rounded"
                                value={paymentAmount}
                                onChange={(e) => setPaymentAmount(e.target.value)}
                                min={cartTotal * 1.1}
                                step="0.01"
                            />
                        </div>
                        <div className="flex space-x-2">
                            <button
                                className="flex-1 bg-gray-300 py-2 rounded-lg"
                                onClick={() => setIsCheckoutModalOpen(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="flex-1 bg-green-600 text-white py-2 rounded-lg"
                                onClick={handleCheckout}
                            >
                                Complete Payment
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}