import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";

function useMobile(maxWidth = 640) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth <= maxWidth
  );
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth <= maxWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [maxWidth]);
  return isMobile;
}

function LaptopModel(props) {
  const ref = useRef();
  const laptopPath = new URL('../assets/Laptop.glb', import.meta.url).href;
  const { scene } = useGLTF(laptopPath);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });
  return <primitive ref={ref} object={scene} scale={[3, 3, 3]} {...props} />;
}

export default function Hero3D() {
  const isMobile = useMobile();
  const laptopImagePath = new URL('../assets/laptop-static.png', import.meta.url).href;

  return (
    <section className="flex flex-col items-center justify-center min-h-[55vh] pb-8 pt-6 sm:pb-12 sm:pt-8 w-full px-2 sm:px-6">
      <motion.h1
        className="text-3xl sm:text-5xl text-center font-extrabold mb-2 sm:mb-3 leading-snug text-gray-50"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I&apos;m <span className="text-cyan-400">Himanshu Ranjan</span>
      </motion.h1>
      <motion.p
        className="mb-2 text-base sm:text-xl text-gray-200 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Welcome to my 3D Portfolio
      </motion.p>
      <motion.p
        className="mb-4 sm:mb-6 text-sm sm:text-lg text-cyan-200 max-w-xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        I have built interactive and responsive web apps with React, TailwindCSS, Vite and also managed databases using MongoDB with hands-on experience on Projects.
      </motion.p>
      <div className="w-full flex justify-center items-center">
        {isMobile ? (
          <img
            src={laptopImagePath}
            alt="3D Laptop preview"
            className="block mx-auto w-[85vw] max-w-xs h-44 sm:h-56 object-contain rounded-xl shadow-lg bg-gray-900"
            draggable="false"
          />
        ) : (
          <Canvas
            className="rounded-xl overflow-hidden bg-gray-900"
            style={{
              height: 340,
              width: 440,
              maxWidth: "95vw",
            }}
          >
            <ambientLight intensity={1.1} />
            <directionalLight position={[2, 8, 5]} intensity={0.8} />
            <LaptopModel />
            <OrbitControls enableZoom={false} />
          </Canvas>
        )}
      </div>
      {!isMobile ? (
        <motion.div
          className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          💡 Interact with the 3D laptop!
        </motion.div>
      ) : (
        <div className="mt-2 text-xs text-gray-400 text-center">
          👍 Preview on any device!
        </div>
      )}
    </section>
  );
}
