import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";

function LaptopModel(props) {
  const ref = useRef();
  const { scene } = useGLTF("/src/assets/Laptop.glb");
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });
  return <primitive ref={ref} object={scene} scale={[3, 3, 3]} {...props} />;
}

useGLTF.preload("/src/assets/Laptop.glb");

export default function Hero3D() {
  return (
    <section className="flex flex-col items-center justify-center w-full min-h-[60vh] pb-8 pt-6 sm:pb-12 sm:pt-8 px-2 sm:px-6">
      <motion.h1
        className="text-3xl sm:text-5xl font-extrabold mb-2 sm:mb-3 leading-snug text-center text-gray-50"
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
        <div
          className="bg-gray-900 rounded-xl shadow-lg flex items-center justify-center"
          style={{
            width: '100%', maxWidth: 400, height: '45vw', maxHeight: 340, minHeight: 180,
          }}
        >
          <Canvas
            className="rounded-xl"
            style={{
              width: '100%',
              height: '100%',
            }}
          >
            <ambientLight intensity={1.1} />
            <directionalLight position={[2, 8, 5]} intensity={0.8} />
            <LaptopModel />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
      </div>
      <motion.div
        className="mt-3 text-xs sm:text-sm text-gray-400 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        💡 Interact with the 3D laptop!
      </motion.div>
    </section>
  );
}