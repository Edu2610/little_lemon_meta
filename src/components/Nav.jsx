import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav aria-label="Navegación principal">
      <ul className="nav-list">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/menu">Menú</Link></li>           {/* placeholder de ruta */}
        <li><Link to="/booking">Reservar</Link></li>
        <li><Link to="/about">Sobre nosotros</Link></li> {/* placeholder */}
        <li><Link to="/contacto">Contacto</Link></li>     {/* placeholder */}
      </ul>
    </nav>
  );
}
