import React from "react";

export default function Footer() {
  return (
    <div className="footer-grid container">
      <p>&copy; {new Date().getFullYear()} Little Lemon. Todos los derechos reservados.</p>
      <nav aria-label="Enlaces del pie">
        <div className="inline gap-md">
          <a href="/privacidad">Privacidad</a>
          <a href="/terminos">Términos</a>
          <a href="/accesibilidad">Accesibilidad</a>
        </div>
      </nav>
    </div>
  );
}
