import { useState } from "react";
import { Link } from "react-router-dom";
import RotatingMug from "../element/mug";
import { FaWhatsapp } from "react-icons/fa";

import caneca1 from "../assets/canecas/caneca1.jpeg";
import caneca2 from "../assets/canecas/caneca2.jpeg";
import caneca3 from "../assets/canecas/caneca3.jpeg";
import caneca4 from "../assets/canecas/caneca4.jpeg";
import video1 from "../assets/canecas/video1.mp4";
import video2 from "../assets/canecas/video2.mp4";

function Canecas() {
  const [bgPos, setBgPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setBgPos({ x, y });
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((touch.clientX - rect.left) / rect.width) * 100;
    const y = ((touch.clientY - rect.top) / rect.height) * 100;
    setBgPos({ x, y });
  };

  const imagens = [
    { src: caneca1, alt: "Caneca 1" },
    { src: caneca2, alt: "Caneca 2" },
    { src: caneca3, alt: "Caneca 3" },
    { src: caneca4, alt: "Caneca 4" },
  ];

  const videos = [
    { src: video1, alt: "Vídeo 1" },
    { src: video2, alt: "Vídeo 2" },
  ];

  return (
    <section className="bg-[#0d1625] min-h-screen pt-28 scroll-pt-28">
      {/* Título */}
      <div className="font-bold text-center text-3xl lg:text-5xl pb-6 text-white">
        Nossos Serviços de Canecas Personalizadas
      </div>

      {/* Fundo interativo */}
      <div
        className="relative overflow-hidden min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* Gradient de fundo */}
        <div
          className="absolute inset-0 transition-all duration-500"
          style={{
            background: `radial-gradient(circle at ${bgPos.x}% ${bgPos.y}%, #c4f25c, #0d1625 80%)`,
            zIndex: 0,
          }}
        />

        {/* Conteúdo acima do background */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-20 text-center pt-10 px-4 lg:px-20">
          <div className="flex-1 text-left">
            <h1 className="font-bold text-2xl lg:text-3xl text-white mb-4">
              SUA CANECA COMO DESEJAR
            </h1>
            <p className="text-white text-base lg:text-lg">
              Oferecemos uma variedade de canecas personalizadas para todas as
              ocasiões. Nossas canecas são perfeitas para presentear amigos e
              familiares, ou para uso pessoal. Com designs exclusivos e
              altíssima qualidade, nossas canecas são feitas para durar e
              impressionar.
            </p>
          </div>
          <div className="flex-1 flex justify-center mt-6 lg:mt-0">
            <RotatingMug />
          </div>
        </div>
      </div>

      {/* Galeria de imagens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
        {imagens.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt}
            className="w-full h-60 sm:h-64 lg:h-80 rounded-lg border border-[#c4f25c] object-cover hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>

      {/* Galeria de vídeos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 p-6">
        {videos.map((vid, index) => (
          <video
            key={index}
            src={vid.src}
            className="w-full h-60 sm:h-64 lg:h-80 rounded-lg border border-[#c4f25c] object-cover hover:scale-105 transition-transform duration-300"
            autoPlay
            loop
            muted
          />
        ))}
      </div>

      {/* Botão de orçamento */}
      <div className="flex justify-center">
        <a
          href="https://wa.me/556192724881"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 px-6 py-3 bg-[rgb(196,242,92)] text-[#0d1625] font-semibold rounded-lg shadow-lg hover:bg-[#a7d64d] transition transform hover:scale-105 my-12"
        >
          <FaWhatsapp className="text-2xl" />
          Solicitar Orçamento
        </a>
      </div>
    </section>
  );
}

export default Canecas;
