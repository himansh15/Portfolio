export default function Navbar() {
  return (
    <nav className="py-4 px-4 md:px-8 flex justify-between items-center bg-gray-900 shadow-lg sticky top-0 z-40">
      <a href="#" className="font-bold text-2xl text-cyan-400 tracking-tight hover:text-cyan-300 focus:text-cyan-300 transition-colors outline-none">
        HIMANSHU RANJAN Portfolio
      </a>
      <div className="space-x-2 md:space-x-4 text-base">
        <a
          href="#about"
          className="px-2 py-1 rounded hover:text-cyan-400 focus:text-cyan-400 focus:bg-gray-800 transition-colors outline-none"
        >
          About
        </a>
        <a
          href="#projects"
          className="px-2 py-1 rounded hover:text-cyan-400 focus:text-cyan-400 focus:bg-gray-800 transition-colors outline-none"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="px-2 py-1 rounded hover:text-cyan-400 focus:text-cyan-400 focus:bg-gray-800 transition-colors outline-none"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}