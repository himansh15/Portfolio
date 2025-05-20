import { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    setSent(true);
  }

  return (
    <section id="contact" className="max-w-xl mx-auto px-4 py-12">
      <motion.div
        whileHover={{
          scale: 1.04,
          boxShadow: "0px 0px 38px 6px #06b6d4AA",
          borderColor: "#06b6d4",
        }}
        transition={{ type: "spring", stiffness: 230, damping: 16 }}
        className="
          relative overflow-hidden
          border-2 border-cyan-700
          rounded-2xl shadow-2xl
          px-8 pt-8 pb-10 flex flex-col items-center
          transition-all duration-200
          before:absolute before:inset-0 before:-z-10
          before:bg-gradient-to-br before:from-gray-900 before:via-cyan-900 before:to-gray-800
          before:opacity-95
        "
      >

        <h2 className="text-3xl font-bold mb-4 text-center text-cyan-400 drop-shadow-xl">
          Contact Me
        </h2>
        <div className="flex justify-center space-x-6 mb-8 z-10">
          <a
            href="https://www.linkedin.com/in/himanshranjan/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="https://github.com/himansh15?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors duration-200"
            aria-label="GitHub"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="mailto:hranjan1520@gmail.com"
            className="hover:text-cyan-400 transition-colors duration-200"
            aria-label="Email"
          >
            <MdEmail size={32} />
          </a>
        </div>

        {sent ? (
          <div className="text-green-400 font-semibold text-center">
            Thank you for reaching out!
          </div>
        ) : (
          <form
            className="space-y-4 w-full z-10"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <input
              required
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-2 rounded bg-gray-800 placeholder-gray-400 border border-cyan-800 focus:ring-2 focus:ring-cyan-500 transition"
              value={form.name}
              onChange={handleChange}
              aria-label="Your Name"
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-2 rounded bg-gray-800 placeholder-gray-400 border border-cyan-800 focus:ring-2 focus:ring-cyan-500 transition"
              value={form.email}
              onChange={handleChange}
              aria-label="Your Email"
            />
            <textarea
              required
              name="message"
              placeholder="Your Message"
              className="w-full p-2 rounded bg-gray-800 h-28 placeholder-gray-400 border border-cyan-800 focus:ring-2 focus:ring-cyan-500 transition"
              value={form.message}
              onChange={handleChange}
              aria-label="Your Message"
            />
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-400 text-white px-6 py-2 rounded font-bold w-full shadow-lg transition"
            >
              Send
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}