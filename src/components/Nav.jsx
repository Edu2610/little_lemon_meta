import React from "react";

export default function Nav() {
  return (
    <nav aria-label="Navegación principal">
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/menu">Menú</a></li>
        <li><a href="/reservas">Reservar</a></li>
        <li><a href="/about">Sobre nosotros</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
    </nav>
  );
}
