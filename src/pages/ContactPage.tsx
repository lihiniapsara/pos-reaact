import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col pb-10">
            {/* Header */}
            <section className="flex flex-col items-center justify-center text-center px-4 py-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-3 drop-shadow-lg">
                    Contact Us
                </h1>
                <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
                    Have questions or need help? Our team is here for you. Reach out and we’ll get back to you as soon as possible!
                </p>
            </section>

            {/* Contact Info & Form */}
            <section className="flex flex-col md:flex-row max-w-4xl mx-auto w-full bg-white shadow-lg rounded-lg p-8 gap-8">
                {/* Contact Info */}
                <div className="flex-1 flex flex-col justify-center space-y-6">
                    <div className="flex items-center space-x-3">
                        <MdEmail className="text-blue-500 w-7 h-7" />
                        <span className="text-gray-700 text-base">support@easypos.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <MdPhone className="text-blue-500 w-7 h-7" />
                        <span className="text-gray-700 text-base">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <MdLocationOn className="text-blue-500 w-7 h-7" />
                        <span className="text-gray-700 text-base">123 Main St, Springfield, USA</span>
                    </div>
                </div>

                {/* Contact Form */}
                <form className="flex-1 space-y-5">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Your Name</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Your Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Message</label>
                        <textarea
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            rows={4}
                            placeholder="How can we help you?"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition-colors"
                    >
                        Send Message
                    </button>
                </form>
            </section>

            {/* Footer */}

        </div>
    );
};

export default ContactPage;
