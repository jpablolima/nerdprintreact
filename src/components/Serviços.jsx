import {
  FaPrint,
  FaTshirt,
  FaMugHot,
  FaTags,
  FaKey,
  FaCameraRetro,
  FaPaintBrush,
} from "react-icons/fa";
import ServiceImg1 from "../assets/impressora.jpg";
import ServiceImg2 from "../assets/camisas.png";
import ServiceImg3 from "../assets/canecas.png";
import ServiceImg4 from "../assets/adesivo.png";
import ServiceImg5 from "../assets/chaveiro.png";
import ServiceImg6 from "../assets/fotos.png";
import ServiceImg7 from "../assets/socialmedia.png";
import { href, Link } from "react-router-dom";

const services = [
  {
    icon: <FaPrint />,
    title: "Impressão A4, A3, A2, A1",
    description:
      "Impressão de documentos, trabalhos e projetos em preto e branco ou colorido com a máxima qualidade.",
    image: ServiceImg1,
    page: "/impressao",
  },
  {
    icon: <FaTshirt />,
    title: "Camisetas Personalizadas",
    description:
      "Crie sua camiseta única para eventos, festas, empresas ou para presentear.",
    image: ServiceImg2,
    page: "/camisetas",
  },
  {
    icon: <FaMugHot />,
    title: "Canecas Personalizadas",
    description: "Sua foto, frase ou logo em canecas de alta qualidade.",
    image: ServiceImg3,
    page: "/canecas",
  },
  {
    icon: <FaTags />,
    title: "Adesivos, Tags e Etiquetas",
    description:
      "Produzimos adesivos, etiquetas e tags em diversos formatos e acabamentos.",
    image: ServiceImg4,
    page: "/adesivos",
  },
  {
    icon: <FaKey />,
    title: "Chaveiros Personalizados",
    description:
      "Um brinde criativo e memorável para sua marca ou presente especial.",
    image: ServiceImg5,
    page: "/chaveiros",
  },
  {
    icon: <FaCameraRetro />,
    title: "Impressão de Fotos",
    description:
      "Traga suas memórias digitais para o papel com qualidade profissional.",
    image: ServiceImg6,
    page: "/fotos",
  },
  {
    icon: <FaPaintBrush />,
    title: "Criação de Artes",
    description:
      "Designs exclusivos para redes sociais, logos e materiais gráficos.",
    image: ServiceImg7,
    page: "/artes",
  },
];

function Serviços() {
  return (
    <section id="services" className=" py-16 px-4 bg-[#0d1625]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl text-white md:text-4xl font-bold text-center mb-12">
          O Que Fazemos ?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link
              to={service.page}
              key={index}
              className="relative rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{
                backgroundImage: `url(${service.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-[#0d1625bf]"></div>

              <div className="relative z-10 text-center p-8 flex flex-col items-center justify-center h-full text-white">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Serviços;
