// src/pages/Home.jsx
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-all duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col-reverse md:flex-row justify-between items-center px-6 text-center md:text-left bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        {/* Image with parallax & blur overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/heroimg.jpg"
            alt="Hero"
            className="w-full h-full object-cover opacity-80 scale-110 filter blur-sm md:blur-md"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Build <span className="text-blue-600">Smarter</span> Websites
          </h1>
          <p className="text-lg md:text-xl text-gray-100 dark:text-gray-300 max-w-xl">
            We craft high-performing, responsive, and visually appealing React websites to help you stand out.
          </p>
          <a href="#features">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition font-semibold shadow-lg">
              🚀 Explore Features
            </button>
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-3xl font-semibold text-center mb-12">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "⚡ Fast Performance", desc: "Optimized React builds with blazing speed." },
            { title: "🎨 Modern Design", desc: "Sleek UI with Tailwind and smooth animations." },
            { title: "📱 Responsive Layout", desc: "Looks great on phones, tablets, and desktops." },
          ].map(({ title, desc }) => (
            <div
              key={title}
              className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-md hover:shadow-2xl transition border border-gray-200 dark:border-gray-600 hover:scale-105 transform duration-300"
            >
              <h3 className="text-xl font-bold mb-2 text-blue-600">{title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 px-6 text-center bg-white dark:bg-gray-900">
        <h2 className="text-2xl font-semibold mb-6">Trusted by Startups</h2>
        <div className="flex flex-wrap justify-center gap-8 text-gray-500 dark:text-gray-300 text-lg">
          <span>🚀 SaaSify</span>
          <span>📦 BoxPro</span>
          <span>🎨 Creatix</span>
          <span>🔐 SecureHub</span>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-semibold mb-4">Let’s Build Your Website</h2>
        <p className="mb-6">Get in touch to launch your next big idea with us.</p>
        <a href="/contact">
          <button className="px-6 py-3 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition font-semibold shadow-md">
            📩 Contact Us
          </button>
        </a>
      </section>
    </motion.div>
  );
}
