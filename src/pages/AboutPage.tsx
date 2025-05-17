import { MdPointOfSale } from "react-icons/md";
import { HiLightningBolt, HiShieldCheck, HiSupport } from "react-icons/hi";

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center text-center px-4 py-16">
                <MdPointOfSale className="text-blue-600 w-16 h-16 mb-4 drop-shadow" />
                <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-3 drop-shadow-lg">
                    About Easy POS
                </h1>
                <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
                    At <span className="font-semibold text-blue-600">Easy POS</span>, our mission is to empower businesses of all sizes with a fast, reliable, and user-friendly point-of-sale solution. We believe in making transactions seamless so you can focus on what matters most-growing your business.
                </p>
            </section>

            {/* Our Values Section */}
            <section className="py-12 bg-white shadow-inner">
                <h2 className="text-2xl font-bold text-center text-blue-700 mb-10">Our Core Values</h2>
                <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center">
                        <HiLightningBolt className="w-12 h-12 text-blue-500 mb-3" />
                        <h3 className="font-bold text-lg mb-1">Simplicity</h3>
                        <p className="text-gray-500 text-sm text-center">
                            Easy to set up, easy to use. We remove the complexity from POS so you can get started quickly.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <HiShieldCheck className="w-12 h-12 text-blue-500 mb-3" />
                        <h3 className="font-bold text-lg mb-1">Security</h3>
                        <p className="text-gray-500 text-sm text-center">
                            Your business and customer data are protected with industry-leading security standards.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <HiSupport className="w-12 h-12 text-blue-500 mb-3" />
                        <h3 className="font-bold text-lg mb-1">Support</h3>
                        <p className="text-gray-500 text-sm text-center">
                            We’re here for you 24/7, ensuring you always have the help you need, when you need it.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team/Closing Section */}
            <section className="py-12 flex flex-col items-center px-4">
                <h2 className="text-2xl font-bold text-blue-700 mb-4">Meet Our Team</h2>
                <p className="text-gray-600 max-w-2xl text-center mb-6">
                    We’re a passionate group of developers, designers, and business experts dedicated to building the best POS experience for you. Our commitment is to innovation, reliability, and your ongoing success.
                </p>
                {/* You can add team member cards here if you want */}
            </section>

            {/* Footer */}
            {/*<footer className="py-4 text-center text-gray-400 text-sm mt-auto">*/}
            {/*    &copy; {new Date().getFullYear()} Easy POS. All rights reserved.*/}
            {/*</footer>*/}
        </div>
    );
};

export default AboutPage;
