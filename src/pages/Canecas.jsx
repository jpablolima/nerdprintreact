import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import RotatingMug from "../element/mug";

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
    <section className="bg-[#0d1625] min-h-screen">
      <Navbar />

      {/* Título */}
      <div className="font-bold text-center text-3xl lg:text-5xl pt-17 pb-6  text-white">
        Nossos Serviços de Canecas Personalizadas
      </div>

      {/* Fundo interativo aplicado só nessa área */}
      <div className="relative overflow-hidden" onMouseMove={handleMouseMove}>
        {/* Background interativo */}
        <div
          className="absolute inset-0 transition-all duration-500"
          style={{
            background: `radial-gradient(circle at ${bgPos.x}% ${bgPos.y}%, #c4f25c, #0d1625 80%)`,
            zIndex: 0,
          }}
        />

        {/* Conteúdo acima do background */}

        <div className="relative z-10 font-bold  lg:flex-row items-center gap-60 lg:gap-90 text-center pt-20">
          <div>
            <h1 className="font-bold text-3xl text-left pl-10">
              SUA CANECA COMO DESEJAR
            </h1>
          </div>
          <div className="flex flex-col items-center relative  font-bold  lg:flex-row lg:gap-100 text-center p-1 pl-10">
            <h2 className="text-3xl font-light  max-w-lg text-white text-left">
              Oferecemos uma variedade de canecas personalizadas para todas as
              ocasiões. Nossas canecas são perfeitas para presentear amigos e
              familiares, ou para uso pessoal. Com designs exclusivos e
              altíssima qualidade, nossas canecas são feitas para durar e
              impressionar.
            </h2>
            <h1>
              <RotatingMug />
            </h1>
          </div>
        </div>
      </div>

      {/* Foto e videos de exemplos de canecas */}

      <div className="flex flex-grid items-center justify-center p-6 gap-4 ">
        {imagens.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt}
            className="w-64 h-[341px] rounded-lg  hover:scale-150 border border-[#15ff00] transition-transform duration-300"
          />
        ))}
      </div>
      <div className="flex items-center justify-center p-6 gap-4">
        {videos.map((vid, index) => (
          <video
            key={index}
            src={vid.src}
            alt={vid.alt}
            className="w-64 h-[341px] rounded-lg hover:scale-150 border border-[#15ff00] transition-transform duration-300 object-cover"
            autoPlay
            loop
            muted
          />
        ))}
      </div>
      <div className="text-center pb-10">
        <Link to="/contato">
          <button className="mt-4 px-6 py-3 bg-[#15ff00] text-black font-semibold rounded-lg hover:bg-green-600 transition-colors duration-300">
            Peça um Orçamento
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Canecas;
