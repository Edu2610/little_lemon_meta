import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import BookingPage from "../pages/BookingPage.jsx";

export default function Main() {
  return (
    <main id="contenido" className="stack">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />

        {/* Rutas placeholder → redirige al home por ahora */}
        <Route path="/menu" element={<Navigate to="/" replace />} />
        <Route path="/about" element={<Navigate to="/" replace />} />
        <Route path="/contacto" element={<Navigate to="/" replace />} />

        {/* 404 simple */}
        <Route path="*" element={<div className="section"><h2>Página no encontrada</h2></div>} />
      </Routes>
    </main>
  );
}
