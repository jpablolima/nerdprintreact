import { useRef } from "react";
import { motion } from "framer-motion";
import { FaTshirt, FaPaintBrush, FaWhatsapp } from "react-icons/fa";
import videoCamisetas from "../assets/camisetas/videoCamisetas.mp4";
import camisa1 from "../assets/camisetas/camisa1.jpg";
import camisa2 from "../assets/camisetas/camisa2.jpg";
import camisa3 from "../assets/camisetas/camisa3.jpg";
import camisa4 from "../assets/camisetas/camisa4.jpg";

function CamisetasPersonalizadas() {
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.volume = 0.5; // áudio com metade do volume
    }
  };

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
    <div className="flex flex-col items-center w-full bg-[#0d1625] text-white">
      <section className="w-full py-12 px-4 pt-24 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Camisetas Personalizadas
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            Estampas exclusivas feitas em prensa térmica, com DTF ou sublimação.
          </p>
          <a
            href="https://wa.me/556192724881"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-6 py-3 bg-[#c4f25c] text-[#0d1625] font-semibold rounded-lg shadow-lg hover:bg-[#a7d64d] transition transform hover:scale-105"
          >
            Peça já a sua
          </a>
        </div>
      </section>

      {/* VÍDEO DEMONSTRATIVO */}
      <section className="w-full py-12 px-4 flex justify-center">
        <div className="max-w-3xl w-full">
          <h2 className="text-3xl text-white font-bold mb-6 text-center">
            Veja como produzimos as camisetas
          </h2>
          <video
            ref={videoRef}
            src={videoCamisetas}
            controls
            onPlay={handlePlay} // ajusta o volume quando o usuário clicar play
            loop
            className="w-full max-h-[400px] rounded-xl shadow-xl object-cover"
          />
        </div>
      </section>

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
              <h3 className="text-2xl font-semibold mt-4 mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </motion.div>
          ))}
        </div>
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
