import React from "react";
import logo from "../assets/little-lemon-logo.png";

export default function Header() {
  return (
    <header>
      <a href="/" aria-label="Little Lemon - inicio">
        <img
          src={logo}
          alt="Little Lemon - Logotipo"
          width="180"
          height="auto"
          style={{ display: "block" }}
        />
      </a>
    </header>
  );
}
