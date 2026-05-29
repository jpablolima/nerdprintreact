import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import foto1 from "../assets/fotos/foto1.png";
import foto2 from "../assets/fotos/foto2.png";
import foto3 from "../assets/fotos/foto3.png";
import foto4 from "../assets/fotos/foto4.png";

function FotosPolaroid() {
  const fotos = [
    { src: foto1, legenda: "Explorando novas paisagens" },
    { src: foto2, legenda: "Momentos de família e amigos" },
    { src: foto3, legenda: "Capturando emoções e luz" },
    { src: foto4, legenda: "Recordações que valem ouro" },
  ];

  const getRotate = (index) => {
    const angles = [-8, 6, -5, 5];
    return angles[index % angles.length] + "deg";
  };

  return (
    <div className="relative flex flex-col items-center w-full bg-gradient-to-b from-[#0d1625] to-[#131c35] text-white overflow-hidden">
      {/* Fundo com elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <motion.div
          className="absolute w-72 h-72 bg-[#c4f25c]/10 rounded-full top-20 left-10"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-60 h-60 bg-[#c4f25c]/20 rounded-full bottom-32 right-20"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-[#c4f25c]/5 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* HERO */}
      <section className="w-full pt-28 pb-16 px-6 text-center relative z-10">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 130, damping: 14 }}
        >
          Galeria de Fotos
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          Momentos capturados em estilo polaroid, cada foto conta uma história.
        </motion.p>
        <motion.a
          href="https://wa.me/556192724881"
          target="_blank"
          rel="noreferrer"
          className="inline-block px-6 py-3 bg-[#c4f25c] text-[#0d1625] font-semibold rounded-lg shadow-lg hover:bg-[#a7d64d] transition transform hover:scale-105"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          Solicitar orçamento
        </motion.a>
      </section>

      {/* MURAL POLAROID */}
      <section className="w-full py-16 px-6 relative flex justify-center flex-wrap gap-6 md:gap-8 lg:gap-10 z-10">
        {fotos.map((foto, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-md shadow-2xl p-3 flex flex-col items-center cursor-pointer w-52 sm:w-56"
            initial={{
              opacity: 0,
              y: 80,
              scale: 0.9,
              rotate: getRotate(index),
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              rotate: getRotate(index),
            }}
            transition={{
              type: "spring",
              stiffness: 160,
              damping: 14,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.1,
              rotate: 0,
              y: -12,
              boxShadow:
                "0 20px 40px rgba(0,0,0,0.35), 0 10px 20px rgba(0,0,0,0.25)",
            }}
          >
            <img
              src={foto.src}
              alt={foto.legenda}
              className="w-full h-64 object-cover mb-2 rounded-sm"
            />
            <span className="text-[#0d1625] font-semibold text-sm transition-colors hover:text-[#a7d64d] text-center">
              {foto.legenda}
            </span>
          </motion.div>
        ))}
      </section>

      {/* CTA FINAL */}
      <section className="w-full py-12 flex justify-center relative z-10">
        <motion.a
          href="https://wa.me/556192724881"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 px-8 py-4 bg-[#c4f25c] text-[#0d1625] text-lg font-semibold rounded-xl shadow-lg hover:bg-[#a7d64d] transition"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaWhatsapp className="text-2xl" />
          Fale Conosco
        </motion.a>
      </section>
    </div>
  );
}

export default FotosPolaroid;
