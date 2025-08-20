import React from "react";

export default function Main() {
  return (
    <main id="contenido" className="stack">
      <section className="section">
        <h1>Bienvenido a Little Lemon</h1>
        <p>Cocina mediterránea fresca, simple y deliciosa.</p>
      </section>

      <section className="section">
        <h2>Platos destacados</h2>
        <div className="cards">
          <article className="card">
            <h3>Ensalada Griega</h3>
            <p>Queso feta, aceitunas kalamata, pepino y aceite de oliva.</p>
          </article>
          <article className="card">
            <h3>Pasta al Limón</h3>
            <p>Pasta fresca con salsa de limón y hierbas de la casa.</p>
          </article>
          <article className="card">
            <h3>Hummus Clásico</h3>
            <p>Crema de garbanzos con tahini, limón y aceite de oliva.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
