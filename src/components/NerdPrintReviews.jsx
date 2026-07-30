import { useState } from "react";

const PLACE_ID = "ChIJ73XekB25W5MR8uekkJAG8Zo";

// Reviews fixos dos melhores — atualize manualmente quando quiser
const reviews = [
  {
    author: "Carlos Silva",
    rating: 5,
    text: "Serviço incrível! Qualidade impressionante e entrega rápida. Super recomendo a Nerd Print!",
    time: "há 2 semanas",
    avatar: "CS",
  },
  {
    author: "Ana Beatriz",
    rating: 5,
    text: "Melhor gráfica que já usei. Atendimento excelente e o resultado ficou perfeito.",
    time: "há 1 mês",
    avatar: "AB",
  },
  {
    author: "Rafael Mendes",
    rating: 5,
    text: "Profissionalismo do início ao fim. Produto com qualidade altíssima e prazo cumprido.",
    time: "há 1 mês",
    avatar: "RM",
  },
  {
    author: "Juliana Costa",
    rating: 5,
    text: "Fui super bem atendida, tiraram todas as minhas dúvidas e o material ficou lindo!",
    time: "há 2 meses",
    avatar: "JC",
  },
  {
    author: "Pedro Alves",
    rating: 5,
    text: "Qualidade excelente! Já é a terceira vez que peço e nunca me decepcionou.",
    time: "há 2 meses",
    avatar: "PA",
  },
];

function Stars({ rating }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={s <= rating ? "#FBBC04" : "#e0e0e0"}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ initials }) {
  const colors = ["#4285F4", "#EA4335", "#34A853", "#FF6D00", "#9C27B0"];
  const color = colors[initials.charCodeAt(0) % colors.length];
  return (
    <div
      style={{
        width: 42,
        height: 42,
        borderRadius: "50%",
        background: color,
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        fontSize: 15,
        flexShrink: 0,
        fontFamily: "'Google Sans', sans-serif",
      }}
    >
      {initials}
    </div>
  );
}

function ReviewCard({ review, index }) {
  const [expanded, setExpanded] = useState(false);
  const MAX = 120;
  const isLong = review.text.length > MAX;

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 16,
        padding: "20px 22px",
        boxShadow: "0 1px 4px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.04)",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        animation: `fadeUp 0.4s ease both`,
        animationDelay: `${index * 80}ms`,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Avatar initials={review.avatar} />
        <div>
          <div
            style={{
              fontWeight: 600,
              fontSize: 14,
              color: "#202124",
              fontFamily: "'Google Sans', sans-serif",
            }}
          >
            {review.author}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginTop: 3,
            }}
          >
            <Stars rating={review.rating} />
            <span style={{ fontSize: 12, color: "#9aa0a6" }}>
              {review.time}
            </span>
          </div>
        </div>
        {/* Google icon */}
        <div style={{ marginLeft: "auto", opacity: 0.35 }}>
          <svg width="18" height="18" viewBox="0 0 48 48">
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
        </div>
      </div>

      <p
        style={{ margin: 0, fontSize: 14, color: "#3c4043", lineHeight: 1.65 }}
      >
        {isLong && !expanded ? review.text.slice(0, MAX) + "…" : review.text}
        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            style={{
              background: "none",
              border: "none",
              color: "#1a73e8",
              cursor: "pointer",
              fontSize: 13,
              padding: "0 0 0 4px",
              fontWeight: 500,
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
        @import url('https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;600;700&display=swap');
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section
        style={{
          fontFamily: "'Google Sans', 'Segoe UI', sans-serif",
          maxWidth: 960,
          margin: "0 auto",
          padding: "48px 24px",
        }}
      >
        {/* Cabeçalho */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 40,
            textAlign: "center",
            gap: 12,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <svg width="28" height="28" viewBox="0 0 48 48">
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
            <h2
              style={{
                margin: 0,
                fontSize: 26,
                fontWeight: 700,
                color: "#202124",
              }}
            >
              O que dizem nossos clientes
            </h2>
          </div>

          {/* Nota geral */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                fontSize: 42,
                fontWeight: 700,
                color: "#202124",
                lineHeight: 1,
              }}
            >
              5,0
            </span>
            <div>
              <Stars rating={5} />
              <div style={{ fontSize: 13, color: "#70757a", marginTop: 4 }}>
                Baseado em 136 avaliações no Google
              </div>
            </div>
          </div>
        </div>

        {/* Grid de reviews */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 16,
            marginBottom: 32,
          }}
        >
          {reviews.map((r, i) => (
            <ReviewCard key={i} review={r} index={i} />
          ))}
        </div>

        {/* Botão ver todos */}
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
              border: "1.5px solid #dadce0",
              borderRadius: 100,
              color: "#1a73e8",
              fontWeight: 600,
              fontSize: 14,
              textDecoration: "none",
              transition: "all 0.2s",
              background: "#fff",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#f0f4ff";
              e.currentTarget.style.borderColor = "#1a73e8";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#fff";
              e.currentTarget.style.borderColor = "#dadce0";
            }}
          >
            Ver todas as avaliações no Google ↗
          </a>
        </div>
      </section>
    </>
  );
}
