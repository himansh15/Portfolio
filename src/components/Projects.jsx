import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "SoftSell",
    description: "A ReactJs based project where users can buy a quote using listed license through contacting our Team.",
    link: "https://himansh15.github.io/SoftSell/",
    github: "https://github.com/himansh15"
  },
  {
    title: "Personal Finance Tracker",
    description: "A web app to track your personal finances. Built with React, Node.js, Express.js and MongoDB.",
    link: "https://personal-finance-tracker-frontend-aafa.onrender.com",
    github: "https://github.com/himansh15"
  },
  {
    title: "Upcoming Soon",
    description: "Details coming soon...",
    link: "https://himansh15.github.io/3D-Portfolio/",
    github: "https://github.com/himansh15",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-2 sm:px-4 py-8 sm:py-12 flex flex-col items-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-cyan-400 text-center drop-shadow-xl">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7 w-full auto-rows-fr">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{
              scale: 1.04,
              boxShadow: "0px 0px 34px 6px #06b6d4B0",
              borderColor: "#06b6d4",
            }}
            transition={{ type: "spring", stiffness: 230, damping: 18 }}
            className={`
              relative overflow-hidden
              rounded-2xl border-2 border-cyan-800
              flex flex-col shadow-xl
              transition-all duration-200 bg-gradient-to-br from-gray-900 via-cyan-900/70 to-gray-800
              h-full min-h-[230px]
              p-4 sm:p-6
            `}
          >
            <div>
              <h3 className="font-semibold text-lg sm:text-xl mb-1 sm:mb-2 text-cyan-400">{project.title}</h3>
              <p className="mb-3 sm:mb-4 text-gray-200 text-sm sm:text-base">{project.description}</p>
            </div>
            <div className="mt-auto flex flex-wrap gap-4">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline text-sm font-medium focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded"
                >
                  Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400 hover:underline text-sm font-medium focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded"
                >
                  GitHub
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}