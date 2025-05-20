import Navbar from "./components/Navbar";
import Hero3D from "./components/Hero3D";
import About from "./components/About";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot"; 

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="flex-1">
        <Hero3D />
        <About />
        <Projects />
        <ContactForm />
        <Chatbot></Chatbot>
      </main>
      <Footer />
    </div>
  );
}
