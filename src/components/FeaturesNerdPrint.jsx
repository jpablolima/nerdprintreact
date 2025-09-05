import { FaRocket } from "react-icons/fa";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { SlBadge } from "react-icons/sl";
import { IoDiamond } from "react-icons/io5";

function FeaturesNerdPrint() {
  return (
    <div>
      <h1 className="text-[40px] text-center font-bold">
        Por Que Escolher a NerdPrint?
      </h1>
      <section className="flex flex-wrap justify-center items-start gap-8 p-10 text-center">
        {/* Servico Rapido */}
        <h1 className="bg-[#0a121e]   rounded-lg">
          <FaRocket className="text-[50px]" />
          <h2 className=" text-[20px] font-bold">Servico Rapido</h2>
          <p className="font-medium text-[20px] text-">
            Agilidade e eficiência <br /> na produção e entrega <br /> dos seus
            pedidos.
          </p>
        </h1>
        {/* //Qualidade Garantida */}
        <h1 className="bg-[#0a121e] rounded-lg ">
          <SlBadge className="text-[50px] " />
          <h2 className="text-[20px] font-bold">Qualidade Garantida</h2>
          <p className="font-medium text-[20px] text-">
            Materiais de primeira <br />
            linha e acabamento <br /> impecável em todos os produtos.
          </p>

          {/* produtos exclusivos */}
        </h1>

        <h1 className="bg-[#0a121e] rounded-lg  ">
          <IoDiamond className="text-[50px] text-cyan-200" />
          <h2 className="text-[20px] font-bold">Produtos Exclusivos</h2>
          <p className="font-medium text-[20px] text-align: center">
            O design que você
            <br /> sonha, transformado em <br />
            realidade.
          </p>
          {/* precos acessiveis */}
        </h1>
        <h1 className="bg-[#0a121e] rounded-lg ">
          <FaHandHoldingDollar className="text-[50px]" />
          <h2 className="text-[20px] font-bold">Preços Acessíveis</h2>
          <p className="font-medium text-[20px] text-align: center">
            O melhor custo-benefício da região,
            <br /> sem abrir mão da <br /> qualidade.
          </p>
        </h1>
      </section>
    </div>
  );
}

export default FeaturesNerdPrint;
