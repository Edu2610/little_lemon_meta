import React from "react";
import logo from "../assets/little-lemon-logo.png";

export default function Header() {
  return (
    <div className="header-inner">
      <a href="/" aria-label="Little Lemon - inicio">
        <img src={logo} alt="Little Lemon - Logotipo" className="logo" />
      </a>

      {/* Acciones opcionales a la derecha */}
      <div className="inline gap-sm">
        <a href="/reservas">Reservar</a>
        <a href="/contacto">Contacto</a>
      </div>
    </div>
  );
}
