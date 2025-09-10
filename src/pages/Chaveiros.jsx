import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import chaveiro from "../assets/chaveiros/bannerchaveiro.png";
import chaveiro1 from "../assets/chaveiros/chaveiro1.jpg";
import chaveiro2 from "../assets/chaveiros/chaveiro2.jpg";
import chaveiro3 from "../assets/chaveiros/chaveiro3.jpg";

function Chaveiros() {
  const chaveiros = [
    { src: chaveiro1, legenda: "Chaveiro divertido e personalizado" },
    { src: chaveiro2, legenda: "Lembrança de eventos especiais" },
    { src: chaveiro3, legenda: "Design exclusivo e durável" },
  ];

  return (
    <div className="relative w-full bg-[#0d1625] text-white overflow-hidden">
      {/* BANNER EM DESTAQUE COM ZOOM + PARALLAX */}
      <motion.div
        className="w-full h-96 sm:h-[500px] relative flex justify-center items-center overflow-hidden rounded-b-3xl shadow-2xl"
        initial={{ scale: 1, x: 0, y: 0 }}
        animate={{
          scale: [1, 1.05, 1],
          x: [0, 15, -15, 0],
          y: [0, 10, -10, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img
          src={chaveiro}
          alt="Banner Chaveiros"
          className="w-full h-full object-scale-down"
        />
        <motion.div
          className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate-fadeInDown">
            Chaveiros Exclusivos
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl">
            Personalizados, modernos e duráveis. Transforme cada chaveiro em uma
            lembrança inesquecível.
          </p>
        </motion.div>
      </motion.div>

      {/* SEÇÃO DE CHAVEIROS */}
      <section className="py-16 px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Nossa Coleção</h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            Explore nossos chaveiros exclusivos, com designs únicos e feitos
            para durar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {chaveiros.map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#131c35] rounded-xl shadow-xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: index * 0.2,
                type: "spring",
                stiffness: 120,
                damping: 14,
              }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-64">
                <img
                  src={item.src}
                  alt={item.legenda}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/50 p-3">
                  <span className="text-[#c4f25c] font-semibold">
                    {item.legenda}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="w-full py-12 flex justify-center relative z-10">
        <motion.a
          href="https://wa.me/556192724881"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 px-8 py-4 bg-[#c4f25c] text-[#0d1625] text-lg font-bold rounded-2xl shadow-lg hover:bg-[#a7d64d] transition transform"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaWhatsapp className="text-2xl" />
          Solicitar Orçamento
        </motion.a>
      </section>
    </div>
  );
}

export default Chaveiros;
