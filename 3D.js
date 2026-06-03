import { motion } from "framer-motion";

import GoogleReviews from "../components/GoogleReviews";
import LocationSection from "../components/LocationSection";

import adesivo from "../assets/3d/chaveiroset.jpeg";
import cartao from "../assets/3d/hulk.jpeg";
import fotos from "../assets/3d/actionfigurecaveira.jpeg";
import impressao from "../assets/3d/leão.jpeg";
import plantasEProjetos from "../assets/3d/portafigurinhasdacopa.jpeg";

function GaleriaImpressao3d() {
  const imagens = [adesivo, cartao, fotos, impressao, plantasEProjetos];

  return (
    <section id="galeria" className="w-full py-16 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-[#0d1625]">
          Galeria do Serviço
        </h2>
        <p className="text-gray-600 mt-2">
          Veja alguns exemplos das impressões que realizamos.
        </p>
      </div>

      <div className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
        {imagens.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="mb-4 break-inside-avoid overflow-hidden rounded-xl shadow-lg"
          >
            <img
              src={img}
              alt={`Exemplo ${index + 1}`}
              className="w-full hover:scale-105 transition duration-300"
            />
          </motion.div>
        ))}
      </div>

      <GoogleReviews />
      <LocationSection />
    </section>
  );
}
export default GaleriaImpressao3d;
