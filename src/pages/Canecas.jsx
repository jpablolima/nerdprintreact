import { FaWhatsapp } from "react-icons/fa";

import capacanecas from "../assets/canecas/capacanecas.jpg";
import canecabranca from "../assets/canecas/canecabranca.png";
import alcacolorida from "../assets/canecas/alcacolorida.png";
import alcadecoracao from "../assets/canecas/alcadecoracao.png";
import canecapreta from "../assets/canecas/canecapreta.png";
import marmorizada from "../assets/canecas/marmorizada.png";

import video1 from "../assets/canecas/video1.mp4"
import video2 from "../assets/canecas/video2.mp4"

function Canecas() {
  const imagens = [
    { src: canecabranca, alt: "Canecas 100% Branca" },
    { src: alcacolorida, alt: "Canecas com alça Colorida " },
    { src: alcadecoracao, alt: "Caneca com alça de Coração " },
    { src: canecapreta, alt: "Canecas 100% Preta" },
    { src: marmorizada, alt: "Canecas Marmorizada" }
  ];

  const videos = [
    { src: video1, alt: "" },
    { src: video2, alt: "" },
  ];

  return (
    <div className="bg-[#0d1625] text-white">
      {/* HERO */}
      <section
        id="canecascapa"
        className="relative w-full min-h-[60vh] flex items-center justify-center text-center text-white bg-gradient-to-r from-[#0f172a] to-[#1e293b] overflow-hidden"
        style={{ backgroundImage: `url(${capacanecas})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1625d9] to-[#0d1625d9]"></div>

        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Canecas Personalizadas
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8">
            Torne seus momentos mais especiais com canecas únicas e de alta
            qualidade. Seja para presentear ou para o dia a dia, temos o design
            perfeito para você.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/556192724881"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-[#c4f25c] text-[#0d1625] font-semibold rounded-lg shadow-lg hover:bg-[#a7d64d] transition-all hover:-translate-y-1"
            >
              <FaWhatsapp className="inline mr-2" />
              Faça um Orçamento
            </a>
            <a
              href="#galeria"
              className="px-6 py-3 border border-[#c4f25c] font-semibold rounded-lg shadow-lg hover:bg-[#c4f25c] hover:text-[#0d1625] transition-all hover:-translate-y-1"
            >
              Ver Modelos
            </a>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="py-12 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#c4f25c]">
          Nossos Modelos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {imagens.map((img, index) => (
            <div
              key={index}
              className="bg-[#0d1625] rounded-xl overflow-hidden border border-[#c4f25c] shadow-lg hover:shadow-[#c4f25c]/50 transition-transform hover:scale-105"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-center text-gray-200">{img.alt}</div>
            </div>
          ))}
        </div>
      </section>

      
      {/* GALERIA DE VÍDEOS */}

    <section className="py-12 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#c4f25c]">
          Veja Nossas Canecas em Ação
      </h2>

     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
         {videos.map((vid, index) => (
              <div key={index} className="rounded-xl overflow-hidden border border-[#c4f25c] shadow-lg">
          <video
          src={vid.src}
          controls
          className="w-full aspect-[4/3] object-cover rounded-2xl"
        />
        <div className="p-4 text-center text-gray-200">{vid.alt}</div>
      </div>
    ))}
  </div>
</section>




      <section className="py-12 bg-gradient-to-r from-[#0d1625] to-[#0f223d] text-center">
        <h3 className="text-2xl md:text-3xl font-semibold mb-6">
          Quer a sua caneca personalizada?
        </h3>
        <a
          href="https://wa.me/556192724881"
          target="_blank"
          rel="noreferrer"
          className="inline-block px-8 py-4 bg-[#c4f25c] text-[#0d1625] font-bold rounded-lg shadow-xl hover:bg-[#a7d64d] transition-transform hover:-translate-y-1"
        >
          Fale Conosco no WhatsApp
        </a>
      </section>
    </div>
  );
}

export default Canecas;
