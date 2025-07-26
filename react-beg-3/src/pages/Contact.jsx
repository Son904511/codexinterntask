import PageWrapper from "../components/PageWrapper";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for reaching out, ${form.name}! We'll get back to you.`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <PageWrapper>
      <motion.section
        className="relative py-24 px-6 max-w-3xl mx-auto text-gray-800"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">Contact Us</h1>
        <p className="text-center text-gray-600 mb-10">
          We'd love to hear from you! Whether you have a question, feedback, or a project in mind — let's connect.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-lg border">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            📩 Send Message
          </button>
        </form>

        {/* Google Map Embed */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-4 text-center">📍 Our Location</h2>
          <div className="w-full h-80 overflow-hidden rounded-xl shadow-md border">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.098846130849!2d-122.41941518468106!3d37.77492977975953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c55555555%3A0xaaaaaaa!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1629999999999"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </motion.section>
    </PageWrapper>
  );
}
