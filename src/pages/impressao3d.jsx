import LocationSection from "../components/LocationSection";
import GoogleReviews from "../components/GoogleReviews";
import { BsFillBadge3dFill } from "react-icons/bs";
import { FaCube } from "react-icons/fa";
import { FiGift } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";

import {
  FaFileAlt,
  FaPalette,
  FaBook,
  FaProjectDiagram,
  FaWhatsapp,
  FaKey,
} from "react-icons/fa";
import { motion } from "framer-motion";

import adesivo from "../assets/3d/chaveiroset.jpeg";
import cartao from "../assets/3d/hulk.jpeg";
import fotos from "../assets/3d/actionfigurecaveira.jpeg";
import impressao from "../assets/3d/leão.jpeg";
import plantasEProjetos from "../assets/3d/portafigurinhasdacopa.jpeg";
//import portalatadacopa from "../assets/3d/portalatadacopa.jpeg";
import capaimpressao from "../assets/3d/capa3d.png";

function Impressao3d() {
  const impressaoTypes = [
    {
      title: "Chaveiros Personalizados",
      description: "Chaveiros 3D, Nomes, Logotipos e frases",
      icon: <FaKey className="text-4xl mb-2 text-[#c4f25c]" />,
      details:
        "Ideal para Presentes, lembranças e brindes personalizados com sua identidade.",
    },
    {
      title: "Brindes Personalizados",
      description: "Brindes Personalizados para enventos.",
      icon: <FiGift className="text-4xl mb-2 text-[#c4f25c]" />,
      details:
        "Brindes criativos para empresas, eventos, aniversários e ações promocionais.",
    },
    {
      title: "Placas Decorativas",
      description: "Placas Decorativas com nome ou frase.",
      icon: <FaBook className="text-4xl mb-2 text-[#c4f25c]" />,
      details:
        "Placas para quartos, salas, escritórios, ambientes gamers e estabelecimentos comerciais.",
    },
    {
      title: "Projetos Sob Medida",
      description:
        "Suportes em geral, para residêncis, celulares e muitos mais. ",
      icon: <FaProjectDiagram className="text-4xl mb-2 text-[#c4f25c]" />,
      details:
        "Suportes práticos e personalizados para celulares, controles, notebooks e muito mais. Soluções para armazenar, organizar e facilitar o seu dia a dia.",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full bg-[#0d1625] text-[#0d1625]">
      {/* capa impressão */}
      <div
        className="relative w-full min-h-[60vh] flex items-center justify-center text-center text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(15,23,42,0.85), rgba(15,23,42,0.85)), url(${capaimpressao})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-3xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Impressão 3D de Alta Precisão
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Produza chaveiros personalizados, placas decorativas, miniaturas,
            brindes corporativos, suportes, organizadores e muito mais.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/556192724881"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-[#c4f25c] text-[#0d1625] font-semibold rounded-lg shadow-lg hover:bg-[#a7d64d] transition transform hover:scale-105"
            >
              <FaWhatsapp className="inline-block mr-2" />
              Enviar Arquivo via WhatsApp
            </a>
            <a
              href="#galeria"
              className="px-6 py-3 border border-[#c4f25c] text-[#c4f25c] font-semibold rounded-lg hover:bg-[#c4f25c] hover:text-[#0d1625] transition"
            >
              Ver Exemplos
            </a>
          </div>
        </div>
      </div>

      {/* Cards flip com fade-in */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl mb-12 mt-16 px-4">
        {impressaoTypes.map((item, index) => (
          <FadeInCard key={index} item={item} />
        ))}
      </div>

      {/* Galeria de imagens */}
      <GaleriaImpressao />

      {/* Botão extra WhatsApp no fim */}
      <a
        href="https://wa.me/556192724881"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-3 px-6 py-3 bg-[#c4f25c] text-[#0d1625] font-semibold rounded-lg shadow-lg hover:bg-[#a7d64d] transition transform hover:scale-105 mt-12 mb-16"
      >
        <FaWhatsapp className="text-2xl" />
        Enviar Arquivo via WhatsApp
      </a>
    </div>
  );
}

function FadeInCard({ item }) {
  const [flipped, setFlipped] = useState(false);
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="w-full"
    >
      <div
        className="relative w-full h-64 cursor-pointer"
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
        style={{ perspective: "1000px" }}
      >
        <div
          className="relative w-full h-full transition-transform duration-500"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Frente */}
          <div
            className="absolute w-full h-full bg-white rounded-xl shadow-md flex flex-col items-center justify-center p-6"
            style={{ backfaceVisibility: "hidden" }}
          >
            {item.icon}
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-700">{item.description}</p>
          </div>

          {/* Verso */}
          <div
            className="absolute w-full h-full bg-[#c4f25c] rounded-xl flex flex-col items-center justify-center p-6"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p>{item.details}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function GaleriaImpressao() {
  const imagens = [adesivo, cartao, fotos, impressao, plantasEProjetos];

  return (
    <section id="galeria" className="w-full py-16 bg-gray-50 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-[#0d1625]">
          Galeria do Serviço
        </h2>
        <p className="text-gray-600 mt-2">
          Veja alguns exemplos das impressões que realizamos.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {imagens.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-lg transform transition hover:scale-105"
          >
            <img
              src={img}
              alt={`Exemplo ${index + 1}`}
              className="w-full h-48 object-cover"
            />
          </motion.div>
        ))}
      </div>

      <GoogleReviews />
      <LocationSection />
    </section>
  );
}

export default Impressao3d;
