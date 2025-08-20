import React from "react";
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <section className="section">
      <div className="flex items-center justify-between flex-wrap gap-md">
        <div className="stack">
          <h1>Little Lemon</h1>
          <p style={{ maxWidth: 520 }}>
            Cocina mediterránea fresca, simple y deliciosa. Reserva tu mesa y vive la experiencia.
          </p>
          <div className="inline gap-md">
            <Link to="/booking" className="btn">Reservar ahora</Link>
            <Link to="/menu" className="btn-outline">Ver menú</Link>
          </div>
        </div>
        <img
          src="/hero.jpg"            /* pon hero.jpg en public/ */
          alt="Plato destacado de Little Lemon"
          style={{ width: 360, maxWidth: "100%", borderRadius: 12 }}
        />
      </div>
    </section>
  );
}
