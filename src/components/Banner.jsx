function Banner() {
  return (
    <div>
      <section
        id="hero"
        className="relative flex items-center justify-center text-center text-white h-[75vh] bg-[url('../img/plotter.jpg')] bg-cover bg-[center_80%] overflow-hidden pt-20"
        style={{ backgroundImage: "url('./src/assets/plotter.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1625b3] to-[#0d1625b3]"></div>

        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Soluções de Impressão Rápida e Personalização
          </h1>
          <p
            id="descricao-hero"
            className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto mb-8"
          >
            Seus projetos, brindes e produtos personalizados com a qualidade e
            agilidade que você precisa, em Águas Lindas de Goiás.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/556192724881"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-[#c4f25c] text-[#0d1625] font-semibold rounded-lg shadow-md hover:bg-[#a7d64d] transition-all hover:-translate-y-1"
            >
              Faça um Orçamento Agora
            </a>
            <a
              href="#services"
              className="px-6 py-3 border border-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-[#0d1625] transition-all hover:-translate-y-1"
            >
              Ver Serviços
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;
