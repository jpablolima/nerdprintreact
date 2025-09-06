import { use, useEffect } from "react";
import { useState } from "react";

export default function GoogleReviews() {
  const [bgPos, setBgPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setBgPos({ x, y });
  };

  return (
    <div
      id="googleReviews"
      className="relative w-full overflow-hidden min-h-[400px]"
      onMouseMove={handleMouseMove}
    >
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          background: `radial-gradient(circle at ${bgPos.x}% ${bgPos.y}%, #c4f25c, #0d1625 80%)`,
        }}
      ></div>

      <div className="relative z-10 p-8">
        <script src="https://elfsightcdn.com/platform.js" async></script>
        <div
          className="elfsight-app-931252bf-f8ba-4ca9-b48f-f05506a4df79"
          data-elfsight-app-lazy
        ></div>
      </div>
    </div>
  );
}
