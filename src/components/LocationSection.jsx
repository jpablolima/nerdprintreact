import React, { useEffect, useState } from "react";

export default function LocationSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById("location");
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="location"
      className="bg-[#0d1625] text-white py-16 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Título */}
        <h2
          className={`text-3xl font-bold text-[#c4f25c] mb-10 text-center transition-opacity duration-1000 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          Visite-nos
        </h2>

        <div
          className={`flex flex-col lg:flex-row items-start lg:items-start gap-8 transition-opacity duration-1000 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Mapa com efeito de brilho */}
          <div className="lg:w-2/3 w-full h-80 lg:h-[450px] rounded-xl overflow-hidden shadow-2xl transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:brightness-110 animate-float">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3840.221253303772!2d-48.26271882487107!3d-15.739430484893322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935bb91d90de75ef%3A0x9af1069090a4e7f2!2sNerd%20Print!5e0!3m2!1spt-BR!2sbr!4v1755263832200!5m2!1spt-BR!2sbr"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Nerd Print"
            ></iframe>
          </div>

          {/* Cards flutuantes */}
          <div className="lg:w-1/3 flex flex-col gap-6">
            {[
              {
                title: "Endereço",
                content: (
                  <>
                    Quadra 64, Lote 03, Loja 03 - Jardim Pérola 2
                    <br />
                    Águas Lindas de Goiás - GO
                    <br />
                    <a
                      href="https://www.google.com/maps/place/Nerd+Print/@-15.7394253,-48.2627188,17z/data=!3m1!4b1!4m6!3m5!1s0x935bb91d90de75ef:0x9af1069090a4e7f2!8m2!3d-15.7394305!4d-48.2601439!16s%2Fg%2F11krq4vz30?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#c4f25c] hover:text-white underline transition-colors duration-300"
                    >
                      Ver no Google Maps
                    </a>
                  </>
                ),
              },
              {
                title: "Horário de Atendimento",
                content: (
                  <>
                    Segunda a Sábado: 09:00 - 19:00
                    <br />
                    Domingo: 09:00 - 12:00
                  </>
                ),
              },
              {
                title: "Contato",
                content: (
                  <>
                    Telefone: (61) 99272-4881
                    <br />
                    Email: nerdprintt@gmail.com
                  </>
                ),
              },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-[#0d1625] border border-[#c4f25c] rounded-xl p-6 shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 animate-float"
              >
                <h3 className="text-xl font-semibold text-[#c4f25c] mb-2">
                  {card.title}
                </h3>
                <p className="text-white/90">{card.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
