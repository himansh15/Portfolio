import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

export default function About() {
  const headingRef = useRef(null);
  const inView = useInView(headingRef, { amount: 0.8, once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        scale: [1, 1.1, 1],
        textShadow: [
          "0px 0px 0px #22d3ee",
          "0px 0px 10px #22d3ee",
          "0px 0px 0px #22d3ee",
        ],
        transition: { duration: 0.6, times: [0, 0.5, 1] },
      });
    }
  }, [inView, controls]);

  return (
    <section id="about" className="max-w-3xl mx-auto px-4 py-16 flex flex-col items-center">
      <motion.div
        whileHover={{
          scale: 1.03,
          boxShadow: "0px 0px 32px 6px #22d3eeAA",
          borderColor: "#22d3ee",
        }}
        transition={{ type: "spring", stiffness: 230, damping: 16 }}
        className="
          relative overflow-hidden
          border-2 border-cyan-700
          rounded-2xl shadow-2xl px-8 pt-10 pb-12
          flex flex-col items-center transition-all duration-200
          before:absolute before:inset-0 before:-z-10
          before:bg-gradient-to-br before:from-gray-900 before:via-cyan-900 before:to-gray-800 before:opacity-95
        "
      >
        <motion.h2
          ref={headingRef}
          animate={controls}
          initial={{ scale: 1, textShadow: "0px 0px 0px #22d3ee" }}
          className="text-3xl font-bold mb-3 text-center text-cyan-400 drop-shadow-xl"
        >
          About Me
        </motion.h2>
        <p className="text-gray-200 mb-5 text-center">
          Hi! I’m <span className="text-cyan-400 font-semibold">Himanshu Ranjan</span>, a final-year MCA candidate at <span className="text-cyan-400">Kalinga Institute of Industrial Technology</span>, Bhubaneswar, with a <span className="text-cyan-400">score of 8.10 CGPA</span>.<br /><br />
          I am passionate about <span className="text-cyan-400">Software Development</span> and I am actively seeking opportunities as a <span className="text-cyan-400">Software Developer</span>.
        </p>
        <ul className="list-disc pl-6 text-gray-300 text-left max-w-2xl mx-auto">
          <li>Technologies: React, TailwindCSS, Vite, MongoDB, Postman, SQL, HTML5, CSS3, and JavaScript.</li>
          <li>Education: Kalinga Institute of Industrial Technology</li>
          <li>Internship Experience: Worked as a Financial Technology Advisor Intern at HighRadius for 3 months.</li>
          <li>
            Contact: +91 9523739358 — Fill in the{" "}
            <a href="#contact" className="text-cyan-400 underline">
              contact form
            </a>{" "}
            or message me via the chatbot!
          </li>
        </ul>
      </motion.div>
    </section>
  );
}
