import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <ul className="nav-list">
      <li><Link to="/">Inicio</Link></li>
      <li><Link to="/menu">Menú</Link></li>
      <li><Link to="/booking">Reservar</Link></li>
      <li><Link to="/about">Sobre nosotros</Link></li>
      <li><Link to="/contacto">Contacto</Link></li>
    </ul>
  );
}
