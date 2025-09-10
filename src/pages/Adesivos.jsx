import { motion } from "framer-motion";
import { FaTags, FaStickyNote, FaWhatsapp } from "react-icons/fa";
import adesivos from "../assets/adesivos/adesivos.png";
import tags1 from "../assets/adesivos/tags1.png";
import topo3d from "../assets/adesivos/topo3d.png";
import topodebolo from "../assets/adesivos/topodebolo.png";

function AdesivosTagsEtiquetas() {
  const imagens = [
    {
      src: tags1,
      legenda: "Etiqueta Especial",
      rotate: "-6deg",
    },
    {
      src: adesivos,
      legenda: "Adesivo Premium",
      rotate: "4deg",
    },
    {
      src: topo3d,
      legenda: "Topos de bolo em 3D",
      rotate: "-3deg",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full bg-[#0d1625] text-white">
      {/* HERO */}
      <section className="w-full pt-28 pb-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Adesivos, Tags e Etiquetas
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Destaque sua marca com materiais personalizados, produzidos em
              alta qualidade e com acabamento premium.
            </p>
            <a
              href="https://wa.me/556192724881"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-6 py-3 bg-[#c4f25c] text-[#0d1625] font-semibold rounded-lg shadow-lg hover:bg-[#a7d64d] transition transform hover:scale-105"
            >
              Solicitar orçamento
            </a>
          </motion.div>

          {/* Imagem destaque */}
          <motion.img
            src={topodebolo}
            alt="Adesivos personalizados"
            className="rounded-2xl shadow-2xl w-full object-cover"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
            viewport={{ once: true }}
          />
        </div>
      </section>

      {/* GALERIA POLAROID */}
      <section className="w-full py-12 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold text-[#0d1625]">
            Exemplos de Serviços
          </h2>
          <p className="text-gray-600 mt-2">
            Algumas produções de adesivos, tags e etiquetas em estilo polaroid.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-10 ">
          {imagens.map((foto, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, rotate: -10 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 12,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="bg-white p-3 rounded-md shadow-xl flex flex-col items-center cursor-default hover:scale-105 transition-transform duration-200"
              style={{
                transform: foto.rotate,
                boxShadow:
                  "0 10px 20px rgba(0,0,0,0.25), 0 4px 8px rgba(0,0,0,0.15)",
              }}
              whileHover={{ rotate: foto.rotate === "4deg" ? 6 : -6 }}
            >
              <img
                src={foto.src}
                alt={foto.legenda}
                className="w-52 h-64 object-cover mb-3 rounded"
              />
              <span className="text-[#0d1625] font-semibold text-sm">
                {foto.legenda}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="w-full py-16 px-6 bg-[#0d1625]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
            viewport={{ once: true }}
            className="bg-white text-[#0d1625] rounded-xl p-8 shadow-2xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-200"
          >
            <FaStickyNote className="text-4xl text-[#c4f25c]" />
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Adesivos Personalizados
            </h3>
            <p className="text-gray-700">
              Impressos em alta definição, resistentes e com cortes
              personalizados para sua marca.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 14,
              delay: 0.15,
            }}
            viewport={{ once: true }}
            className="bg-white text-[#0d1625] rounded-xl p-8 shadow-2xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-200"
          >
            <FaTags className="text-4xl text-[#c4f25c]" />
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Tags & Etiquetas
            </h3>
            <p className="text-gray-700">
              Produzidas em papéis especiais, como kraft e couché, agregando
              valor ao seu produto.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="w-full py-12 flex justify-center">
        <motion.a
          href="https://wa.me/556192724881"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 px-8 py-4 bg-[#c4f25c] text-[#0d1625] text-lg font-semibold rounded-xl shadow-lg hover:bg-[#a7d64d] transition"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaWhatsapp className="text-2xl" />
          Fale Conosco
        </motion.a>
      </section>
    </div>
  );
}

export default AdesivosTagsEtiquetas;
