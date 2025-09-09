import { useEffect, useRef, useState } from "react";
import {
  FaFileAlt,
  FaPalette,
  FaBook,
  FaProjectDiagram,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";

// Imagens locais
import adesivo from "../assets/impressao/adesivo.jpg";
import cartao from "../assets/impressao/cartaoDeVisita.jpg";
import fotos from "../assets/impressao/fotos.jpg";
import impressao from "../assets/impressao/impressao.jpg";
import plantasEProjetos from "../assets/impressao/plantasEProjetos.jpg";

function ImpressaoPremium() {
  const impressaoTypes = [
    {
      title: "Preto e Branco",
      description:
        "Documentos e trabalhos em preto e branco com qualidade profissional.",
      icon: <FaFileAlt className="text-4xl mb-2 text-[#c4f25c]" />,
      details: "Ideal para trabalhos simples e documentos do dia a dia.",
    },
    {
      title: "Colorido",
      description:
        "Impressões coloridas para trabalhos, projetos ou materiais gráficos.",
      icon: <FaPalette className="text-4xl mb-2 text-[#c4f25c]" />,
      details: "Perfeito para apresentações, flyers ou projetos criativos.",
    },
    {
      title: "Trabalhos Acadêmicos",
      description: "Impressão de monografias, artigos e relatórios acadêmicos.",
      icon: <FaBook className="text-4xl mb-2 text-[#c4f25c]" />,
      details:
        "Capa personalizada, encadernação e alta qualidade de impressão.",
    },
    {
      title: "Projetos Profissionais",
      description:
        "Plantas, projetos de design ou arquitetura com impressão de alta precisão.",
      icon: <FaProjectDiagram className="text-4xl mb-2 text-[#c4f25c]" />,
      details: "Alta resolução e cores precisas para profissionais.",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full bg-[#0d1625] text-[#0d1625] py-16 px-4">
      {/* Banner */}
      <div className="text-center mb-12 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Impressão de Alta Qualidade
        </h1>
        <p className="text-lg md:text-xl text-gray-200">
          Impressão de documentos, trabalhos e projetos em preto e branco ou
          colorido com a máxima qualidade.
        </p>
      </div>

      {/* Cards flip com fade-in */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl mb-12">
        {impressaoTypes.map((item, index) => (
          <FadeInCard key={index} item={item} />
        ))}
      </div>

      {/* Galeria de imagens */}
      <GaleriaImpressao />

      {/* Botão de WhatsApp */}
      <a
        href="https://wa.me/556192724881"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-3 px-6 py-3 bg-[#c4f25c] text-[#0d1625] font-semibold rounded-lg shadow-lg hover:bg-[#a7d64d] transition transform hover:scale-105 mt-12"
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
      { threshold: 0.2 }
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
        {/* Container do flip */}
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

// Seção de galeria de imagens com Framer Motion
function GaleriaImpressao() {
  const imagens = [adesivo, cartao, fotos, impressao, plantasEProjetos];

  return (
    <section className="w-full py-16 bg-gray-50 px-4">
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
    </section>
  );
}

export default ImpressaoPremium;
