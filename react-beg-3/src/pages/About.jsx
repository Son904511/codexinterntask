import PageWrapper from "../components/PageWrapper";
import { motion } from "framer-motion";
export default function About() {
  return (
    <PageWrapper>
      <motion.section
        className="py-20 px-6 max-w-5xl mx-auto text-gray-800"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-blue-700 text-center mb-6">About Us</h1>
        <p className="text-center text-lg text-gray-600 mb-10">
          At MySite, we simplify digital experiences for everyone. Our team blends creativity, technology, and strategic thinking to build impactful and accessible digital products.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Innovation",
              desc: "We embrace change and continually explore new ideas to push the boundaries of what's possible."
            },
            {
              title: "Integrity",
              desc: "We operate with transparency and honor our commitments to customers, partners, and each other."
            },
            {
              title: "Customer Focus",
              desc: "We center our work around our users and aim to exceed their expectations every time."
            }
          ].map((value) => (
            <div
              key={value.title}
              className="bg-blue-50 p-6 rounded-xl shadow text-center"
            >
              <h3 className="text-xl font-semibold text-blue-700">{value.title}</h3>
              <p className="text-gray-700 mt-3">{value.desc}</p>
            </div>
          ))}
        </div>

        {/* Timeline Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">Our Journey</h2>
          <ul className="border-l-4 border-blue-600 pl-6 space-y-8">
            <li>
              <p className="font-semibold text-blue-700">2021</p>
              <p className="text-gray-600">Founded with a vision to transform digital experience.</p>
            </li>
            <li>
              <p className="font-semibold text-blue-700">2022</p>
              <p className="text-gray-600">Launched our first SaaS product and expanded our team.</p>
            </li>
            <li>
              <p className="font-semibold text-blue-700">2023</p>
              <p className="text-gray-600">Reached 100k users and partnered with global brands.</p>
            </li>
          </ul>
        </div>

        {/* Testimonials Section */}
        <div>
          <h2 className="text-2xl font-semibold text-center text-blue-600 mb-8">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Alex",
                feedback: "They brought our vision to life with professionalism and care. We couldn't be happier."
              },
              {
                name: "Priya",
                feedback: "Reliable, creative, and great communication. Highly recommend their services!"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow border">
                <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
                <p className="mt-4 font-semibold text-blue-600">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </PageWrapper>
  );
}
