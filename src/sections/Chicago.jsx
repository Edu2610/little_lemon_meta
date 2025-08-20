import React from "react";

export default function Chicago() {
  return (
    <section className="section">
      <div className="flex items-center justify-between flex-wrap gap-md">
        <div className="stack">
          <h2>Little Lemon Chicago</h2>
          <p style={{ maxWidth: 580 }}>
            Nacido en el corazón de Chicago, Little Lemon mezcla recetas tradicionales mediterráneas
            con ingredientes locales. Nuestra misión es ofrecer comida honesta, fresca y memorable.
          </p>
        </div>
        <img
          src="/chicago.jpg"   /* pon chicago.jpg en public/ */
          alt="Fachada del restaurante en Chicago"
          style={{ width: 360, maxWidth: "100%", borderRadius: 12 }}
        />
      </div>
    </section>
  );
}
