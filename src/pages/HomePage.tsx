import { HiLightningBolt, HiShieldCheck, HiSupport } from "react-icons/hi";
import { MdPointOfSale } from "react-icons/md";

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col">
            {/* Hero Section */}
            <header className="flex-grow flex flex-col items-center justify-center text-center px-4">
                <div className="flex items-center justify-center mb-4">
                    <MdPointOfSale className="text-blue-600 w-12 h-12 mr-2 drop-shadow" />
                    <h1 className="text-4xl md:text-6xl font-extrabold text-blue-700 drop-shadow-lg">
                        Easy POS
                    </h1>
                </div>
                <p className="text-lg md:text-2xl text-gray-700 mb-8 max-w-xl">
                    Effortless Point of Sale for Modern Businesses.
                    <span className="block mt-1 text-blue-500 font-semibold">
            Fast. Reliable. User-Friendly.
          </span>
                </p>
                <a
                    href="#"
                    className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition-colors text-lg font-semibold"
                >
                    Get Started
                </a>
            </header>

            {/* Features Section */}
            <section className="py-12 bg-white shadow-inner">
                <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center">
                        <HiLightningBolt className="w-12 h-12 text-blue-500 mb-3" />
                        <h3 className="font-bold text-lg mb-1">Easy Setup</h3>
                        <p className="text-gray-500 text-sm text-center">
                            Start selling in minutes with a seamless onboarding experience.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <HiShieldCheck className="w-12 h-12 text-blue-500 mb-3" />
                        <h3 className="font-bold text-lg mb-1">Secure & Reliable</h3>
                        <p className="text-gray-500 text-sm text-center">
                            Your data is safe with us, and our uptime is industry-leading.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <HiSupport className="w-12 h-12 text-blue-500 mb-3" />
                        <h3 className="font-bold text-lg mb-1">24/7 Support</h3>
                        <p className="text-gray-500 text-sm text-center">
                            Our team is always here to help you with any questions or issues.
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            {/*<footer className="py-4 text-center text-gray-400 text-sm">*/}
            {/*    &copy; {new Date().getFullYear()} Easy POS. All rights reserved.*/}
            {/*</footer>*/}
        </div>
    );
};

export default HomePage;
