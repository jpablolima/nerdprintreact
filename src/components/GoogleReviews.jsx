import { useState } from "react";

const PLACE_ID = "ChIJ73XekB25W5MR8uekkJAG8Zo";

const reviews = [
  {
    author: "Ranny Almeida",
    rating: 5,
    text: "Sabe aquelas impressões em 3D? Eles são feras, além do atendimento show. Praticidade de atender pelo WhatsApp, fui só buscar o pedido, chegando lá, estava exatamente como pedi. Obrigado!",
    time: "3 dias atrás",
    avatar: "RA",
  },
  {
    author: "Armando Guedes Licurgo",
    rating: 5,
    text: "Atendimento excelente, atenciosos e educados. Parabéns.....",
    time: "3 dias atrás",
    avatar: "AG",
  },
  {
    author: "Ana Carolina Silva",
    rating: 5,
    text: "Atendimento nota 100, produto excelente, preço acessível e entrega muito rápida, sempre com eles agora.",
    time: "3 dias atrás",
    avatar: "AC",
  },
  {
    author: "Dellany Ariandena",
    rating: 5,
    text: "Atendimento excelente!! Super atencioso!!",
    time: "uma semana atrás",
    avatar: "DA",
  },
  {
    author: "Adailton Figueira",
    rating: 5,
    text: "Putz sem comentários, pessoas íntegras, bem educadas, profissionais top, local bem localizado, super gentis. Obgd pelo atendimento e já fiz outro pedido, desde já agradeço...!!!",
    time: "uma semana atrás",
    avatar: "AF",
  },
  {
    author: "David Diniz De Paula",
    rating: 5,
    text: "Excelente atendimento qualidade top demais os produtos são muito bons e ótimos preços.",
    time: "uma semana atrás",
    avatar: "DD",
  },
  {
    author: "Anderson Souza",
    rating: 5,
    text: "Ótimo trabalho, atendimento rápido, excelente.",
    time: "2 semanas atrás",
    avatar: "AS",
  },
  {
    author: "Jacki Suellen Silva",
    rating: 5,
    text: "Atendimento rápido no ZAP. Atendimento personalizado no presencial. Entrega dentro do prazo. Serviço muito bom.",
    time: "2 semanas atrás",
    avatar: "JS",
  },
  {
    author: "Isabella Moreira",
    rating: 5,
    text: "Foi bom, me atenderam super bem.",
    time: "2 semanas atrás",
    avatar: "IM",
  },
  {
    author: "Valdivino Paulo",
    rating: 5,
    text: "Gostei, parabéns pelo atendimento.",
    time: "2 semanas atrás",
    avatar: "VP",
  },
  {
    author: "Nutri Rayane Sousa",
    rating: 5,
    text: "Melhor atendimento. Valores excelentes.",
    time: "2 semanas atrás",
    avatar: "NR",
  },
  {
    author: "Rosangela Holanda",
    rating: 5,
    text: "Gostei muito do trabalho da Nerd Print, muito bom.. Estão de parabéns...",
    time: "2 semanas atrás",
    avatar: "RH",
  },
];

const avatarColors = {
  RA: "#4285F4",
  AG: "#EA4335",
  AC: "#34A853",
  DA: "#9C27B0",
  AF: "#FF6D00",
  DD: "#9C27B0",
  AS: "#EA4335",
  JS: "#34A853",
  IM: "#EA4335",
  VP: "#4285F4",
  NR: "#EA4335",
  RH: "#34A853",
};

function Stars({ rating, size = 14 }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={s <= rating ? "#FBBC04" : "#2a3a50"}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48">
      <path
        fill="#FFC107"
        d="M43.6 20H24v8h11.3C33.6 33.1 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.5 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 20-8 20-20 0-1.3-.1-2.7-.4-4z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7l6.6 4.8C14.5 15.1 18.9 12 24 12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.5 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.2 0 9.9-1.9 13.5-5l-6.3-5.2C29.3 35.3 26.8 36 24 36c-5.2 0-9.6-3-11.3-7.2l-6.5 5.1C9.6 39.6 16.3 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20H24v8h11.3c-.9 2.5-2.5 4.6-4.6 6l6.3 5.2C40.8 35.6 44 30.3 44 24c0-1.3-.1-2.7-.4-4z"
      />
    </svg>
  );
}

function Avatar({ initials }) {
  return (
    <div
      style={{
        width: 40,
        height: 40,
        borderRadius: "50%",
        background: avatarColors[initials] || "#4285F4",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        fontSize: 14,
        flexShrink: 0,
      }}
    >
      {initials}
    </div>
  );
}

function ReviewCard({ review, index }) {
  const [expanded, setExpanded] = useState(false);
  const MAX = 110;
  const isLong = review.text.length > MAX;

  return (
    <div
      style={{
        background: "#111d2e",
        borderRadius: 12,
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        border: "1px solid #1e2d42",
        transition: "border-color 0.2s, transform 0.2s",
        animation: `fadeUp 0.4s ease both`,
        animationDelay: `${index * 55}ms`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#c4f25c44";
        e.currentTarget.style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#1e2d42";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <Avatar initials={review.avatar} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontWeight: 600,
              fontSize: 14,
              color: "#fff",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {review.author}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              marginTop: 3,
            }}
          >
            <Stars rating={review.rating} />
            <span style={{ fontSize: 11, color: "#4a6080" }}>
              {review.time}
            </span>
          </div>
        </div>
        <GoogleIcon size={16} />
      </div>

      <p
        style={{
          margin: 0,
          fontSize: 13,
          color: "#fff",
          fontWeight: 500,
          lineHeight: 1.65,
        }}
      >
        {isLong && !expanded ? review.text.slice(0, MAX) + "…" : review.text}
        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            style={{
              background: "none",
              border: "none",
              color: "#c4f25c",
              cursor: "pointer",
              fontSize: 12,
              padding: "0 0 0 4px",
              fontWeight: 600,
            }}
          >
            {expanded ? "ver menos" : "ver mais"}
          </button>
        )}
      </p>
    </div>
  );
}

export default function NerdPrintReviews() {
  const googleUrl = `https://search.google.com/local/reviews?placeid=${PLACE_ID}`;

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section
        style={{
          fontFamily: "'Segoe UI', sans-serif",
          width: "100%",
          padding: "64px 16px",
          boxSizing: "border-box",
        }}
      >
        {/* Cabeçalho */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2
            style={{
              margin: "0 0 20px",
              fontSize: "clamp(26px, 4vw, 44px)",
              fontWeight: 800,
              color: "#fff",
              letterSpacing: "-0.5px",
              lineHeight: 1.2,
            }}
          >
            <span style={{ color: "#c4f25c" }}>
              {" "}
              O que nossos clientes dizem
            </span>
          </h2>

          {/* Rating pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              background: "#111d2e",
              border: "1px solid #1e2d42",
              borderRadius: 100,
              padding: "12px 28px",
            }}
          >
            <GoogleIcon size={24} />
            <span style={{ fontSize: 24, fontWeight: 800, color: "#fff" }}>
              5,0
            </span>
            <Stars rating={5} size={20} />
            <span style={{ fontSize: 13, color: "#4a6080" }}>
              · 114 avaliações no Google
            </span>
          </div>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 14,
            maxWidth: "100%",
            margin: "0 auto 40px",
          }}
        >
          {reviews.map((r, i) => (
            <ReviewCard key={i} review={r} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <a
            href={googleUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 28px",
              background: "#c4f25c",
              borderRadius: 8,
              color: "#0d1625",
              fontWeight: 700,
              fontSize: 14,
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <GoogleIcon size={18} />
            Ver todas as 114 avaliações
          </a>
        </div>
      </section>
    </>
  );
}
