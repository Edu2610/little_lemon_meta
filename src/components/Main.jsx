import React from "react";

export default function Main() {
  return (
    <main id="contenido">
      <section aria-labelledby="hero-title">
        <h1 id="hero-title">Bienvenido a Little Lemon</h1>
        <p>Cocina mediterránea fresca, simple y deliciosa.</p>
      </section>

      <section aria-labelledby="destacados-title">
        <h2 id="destacados-title">Platos destacados</h2>
        <article>
          <h3>Ensalada Griega</h3>
          <p>Queso feta, aceitunas kalamata, pepino y aceite de oliva.</p>
        </article>
        <article>
          <h3>Pasta al Limón</h3>
          <p>Pasta fresca con salsa de limón y hierbas de la casa.</p>
        </article>
      </section>
    </main>
  );
}
