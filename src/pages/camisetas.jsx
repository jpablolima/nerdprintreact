import { useRef } from "react";
import { motion } from "framer-motion";
import { FaTshirt, FaPaintBrush, FaWhatsapp } from "react-icons/fa";
import LocationSection from "../components/LocationSection";
import GoogleReviews from "../components/GoogleReviews";
import { BsFillBadge3dFill } from "react-icons/bs";
import { FaCube } from "react-icons/fa";
import { FiGift } from "react-icons/fi";
import { useEffect, useState } from "react";

import capacamisas from "../assets/camisetas/capa.png";
import camisa1 from "../assets/camisetas/camisa1.jpg";
import camisa2 from "../assets/camisetas/camisa2.jpg";
import camisa3 from "../assets/camisetas/camisa3.jpg";
import camisa4 from "../assets/camisetas/camisa4.jpg";
import { ImPriceTag } from "react-icons/im";

import {
  FaFileAlt,
  FaPalette,
  FaBook,
  FaProjectDiagram,
  FaKey,
} from "react-icons/fa";


function CamisetasPersonalizadas() {
  const metodos = [
    {
      title: "Prensa Térmica com DTF",
      description:
        "Impressão em filme especial (DTF), transferida por calor. Garante durabilidade e cores intensas, até em tecidos escuros.",
      icon: <FaPaintBrush className="text-4xl text-[#c4f25c]" />,
    },
    {
      title: "Papel de Sublimação",
      description:
        "Ideal para tecidos claros de poliéster, com estampas que não desbotam. Leve, confortável e de alta definição.",
      icon: <FaTshirt className="text-4xl text-[#c4f25c]" />,
    },
  ];

  const imagens = [camisa1, camisa2, camisa3, camisa4];

  return (
    <div className="flex flex-col items-center w-full bg-[#0d1625] text-[#0d1625]">
      {/* capa impressão */}
      <div
        className="relative w-full min-h-[60vh] flex items-center justify-center text-center text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(15,23,42,0.85), rgba(15,23,42,0.85)), url(${capacamisas})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-3xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Camisetas Personalizadas
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Estampas exclusivas feitas em prensa térmica, com DTF ou sublimação.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/556192724881"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-[#c4f25c] text-[#0d1625] font-semibold rounded-lg shadow-lg hover:bg-[#a7d64d] transition transform hover:scale-105"
            >
              <FaWhatsapp className="inline-block mr-2" />
              Entrar em Contato pelo WhatsApp
            </a>

            {/* <a
              href="#galeria"
              className="px-6 py-3 border border-[#c4f25c] text-[#c4f25c] font-semibold rounded-lg hover:bg-[#c4f25c] hover:text-[#0d1625] transition"
            >
              Ver Exemplos
            </a>*/}
          </div>
        </div>
      </div>

      {/* GALERIA DE CAMISETAS DESTACADAS */}
      <section className="w-full py-16 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-[#0d1625]">
            Modelos em Destaque
          </h2>

          <p className="text-gray-600 mt-2">
            Confira algumas camisetas personalizadas que já produzimos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {imagens.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transform transition bg-white"
            >
              <img
                src={img}
                alt={`Camiseta ${index + 1}`}
                className="w-full h-80 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* MÉTODOS DE PRODUÇÃO */}
      <section className="w-full bg-[#0d1625] py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          {metodos.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              viewport={{ once: true }}
              className="bg-white text-[#0d1625] rounded-xl p-10 shadow-2xl flex flex-col items-center text-center"
            >
              {item.icon}

              <h3 className="text-2xl font-semibold mt-4 mb-2">
                {item.title}
              </h3>

              <p className="text-gray-700">{item.description}</p>
            </motion.div>
          ))}
        </div>
        <GoogleReviews />
        <LocationSection />
      </section>

      {/* CTA FINAL */}
      <a
        href="https://wa.me/556192724881"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-3 px-6 py-3 bg-[#c4f25c] text-[#0d1625] font-semibold rounded-lg shadow-lg hover:bg-[#a7d64d] transition transform hover:scale-105 my-12"
      >
        <FaWhatsapp className="text-2xl" />
        Solicitar Orçamento
      </a>

    </div>

  );


}

export default CamisetasPersonalizadas;
