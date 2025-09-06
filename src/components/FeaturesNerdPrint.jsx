import { FaRocket } from "react-icons/fa";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { SlBadge } from "react-icons/sl";
import { IoDiamond } from "react-icons/io5";

const features = [
  {
    icon: <FaRocket />,
    title: "Serviço Rápido",
    description:
      "Agilidade e eficiência na produção e entrega dos seus pedidos.",
  },
  {
    icon: <FaHandHoldingDollar />,
    title: "Preços acessíveis",
    description:
      "O melhor custo-benefício da região, sem abrir mão da qualidade.",
  },
  {
    icon: <SlBadge />,
    title: "Qualidade Garantida",
    description:
      "Materiais de primeira linha e acabamento impecável em todos os produtos.",
  },
  {
    icon: <IoDiamond />,
    title: "Produtos Exclusivos",
    description: "O design que você sonha, transformado em realidade.",
  },
];

function FeaturesNerdPrint() {
  return (
    <section id="features" className="flex justify-center bg-[#0d1625]">
      <div className="w-full max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Por Que escolher a NerdPrint?
        </h2>

        {/* Grid responsiva */}
        <div className="cursor-pointer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-[#0d1625] text-white 
                         shadow-md border border-gray-700 
                         transform transition duration-300 
                         hover:scale-105 hover:bg-gradient-to-b hover:from-[#c4f25c] hover: 
                         hover:shadow-lg hover:shadow-blue-600/50"
            >
              <div className="text-[2.5rem] mb-4 group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm opacity-90">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesNerdPrint;
