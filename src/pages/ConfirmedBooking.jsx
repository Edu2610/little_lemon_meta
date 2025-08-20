import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function ConfirmedBooking() {
  const { state } = useLocation() || {};
  const booking = state || {};

  return (
    <section className="section">
      <h1 style={{ marginTop: 0 }}>¡Reserva confirmada! 🎉</h1>
      <p>Gracias por reservar en Little Lemon.</p>

      {booking?.date ? (
        <ul>
          <li><strong>Fecha:</strong> {booking.date}</li>
          <li><strong>Hora:</strong> {booking.time}</li>
          <li><strong>Comensales:</strong> {booking.guests}</li>
          <li><strong>Ocasión:</strong> {booking.occasion}</li>
        </ul>
      ) : (
        <p>No se encontraron datos de la reserva.</p>
      )}

      <div className="inline gap-md" style={{ marginTop: 12 }}>
        <Link to="/" className="btn">Volver al inicio</Link>
        <Link to="/booking" className="btn-outline">Hacer otra reserva</Link>
      </div>
    </section>
  );
}
