import React from "react";

export default function Footer() {
  return (
    <footer>
      <section aria-labelledby="footer-info">
        <h2 id="footer-info" style={{ position: "absolute", left: "-9999px" }}>
          Información del pie de página
        </h2>
        <p>&copy; {new Date().getFullYear()} Little Lemon. Todos los derechos reservados.</p>
        <address>
          123 Lemon Street, Chicago, IL<br />
          Tel: <a href="tel:+11234567890">+1 (123) 456-7890</a><br />
          Email: <a href="mailto:hello@littlelemon.com">hello@littlelemon.com</a>
        </address>
        <nav aria-label="Enlaces del pie">
          <ul>
            <li><a href="/privacidad">Política de privacidad</a></li>
            <li><a href="/terminos">Términos de uso</a></li>
            <li><a href="/accesibilidad">Accesibilidad</a></li>
          </ul>
        </nav>
      </section>
    </footer>
  );
}
