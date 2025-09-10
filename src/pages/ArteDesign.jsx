import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import arte1 from "../assets/artes/arte1.png";
import arte2 from "../assets/artes/arte2.png";
import arte3 from "../assets/artes/arte3.jpg";

function ArtDesign() {
  const artes = [
    { src: arte1, titulo: "Ilustração Digital Moderna" },
    { src: arte2, titulo: "Arte Conceitual Criativa" },
    { src: arte3, titulo: "Design Colorido e Vibrante" },
  ];

  const bannerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start start", "end start"],
  });
  const bannerY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const bannerScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  // Partículas que seguem o mouse
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState(
    Array.from({ length: 15 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * 100,
      size: Math.random() * 20 + 10,
      color: `hsl(${Math.random() * 360}, 70%, 60%)`,
    }))
  );

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative w-full bg-[#1b1b2f] text-white overflow-hidden">
      {/* BANNER COM PARALLAX E ZOOM SUAVE */}
      <motion.div
        ref={bannerRef}
        className="w-full h-80 sm:h-[400px] flex flex-col items-center justify-center relative overflow-hidden rounded-b-3xl shadow-2xl"
        style={{ y: bannerY, scale: bannerScale }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#ff6ec7] via-[#ffc600] to-[#6efff3]" />

        {/* TÍTULO */}
        <motion.h1
          className="text-4xl sm:text-6xl font-bold text-white z-10 text-center px-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Criação de Artes Exclusivas
        </motion.h1>

        {/* BREVE DESCRIÇÃO */}
        <motion.p
          className="text-lg sm:text-xl text-white/90 mt-4 z-10 text-center max-w-2xl px-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1.2 }}
        >
          Fazemos artes personalizadas e exclusivas para você.
        </motion.p>

        {/* Partículas flutuantes no banner */}
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              top: p.y,
              left: p.x,
              pointerEvents: "none",
            }}
            animate={{
              x: mousePos.x / (20 + i),
              y: mousePos.y / (20 + i),
            }}
            transition={{ type: "spring", stiffness: 30, damping: 10 }}
          />
        ))}
      </motion.div>

      {/* SEÇÃO DE ARTES COM LEVE PARALLAX */}
      <section className="py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Nossa Galeria</h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            Explore criações exclusivas, vibrantes e inovadoras, perfeitas para
            qualquer projeto criativo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {artes.map((arte, index) => (
            <motion.div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer bg-gradient-to-br from-[#ff6ec7]/30 via-[#ffc600]/20 to-[#6efff3]/30"
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: index * 0.2,
                type: "spring",
                stiffness: 120,
                damping: 14,
              }}
              whileHover={{ scale: 1.07, rotate: 1 }}
              viewport={{ once: true }}
            >
              <motion.img
                src={arte.src}
                alt={arte.titulo}
                className="w-full h-64 object-cover"
                whileHover={{ scale: 1.05 }}
              />
              <div className="absolute bottom-0 left-0 w-full bg-black/50 p-4 text-center">
                <h3 className="text-lg font-bold text-[#fffa]">
                  {arte.titulo}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA FINAL ANIMADO */}
      <section className="w-full py-12 flex justify-center">
        <motion.a
          href="https://wa.me/556192724881"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 px-8 py-4 bg-[#c4f25c] text-[#0d1625] 'text-lg font-bold rounded-2xl shadow-lg hover:bg-[#e455c3] transition transform"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaWhatsapp className="text-2xl" />
          Solicitar Criação
        </motion.a>
      </section>
    </div>
  );
}

export default ArtDesign;
