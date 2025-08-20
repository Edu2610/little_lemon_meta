// src/components/BookingSlotsList.jsx
import React from "react";
import BookingSlot from "./BookingSlot.jsx";

export default function BookingSlotsList({ availableTimes, bookedTimes }) {
  return (
    <section className="section">
      <h2>Horarios</h2>

      {/* Disponibles */}
      <h3 style={{ marginTop: 0 }}>Disponibles</h3>
      <div className="cards">
        {availableTimes.length === 0 ? (
          <p>No hay horarios disponibles.</p>
        ) : (
          availableTimes.map((t) => <BookingSlot key={`a-${t}`} time={t} status="available" />)
        )}
      </div>

      {/* Reservados (de la fecha seleccionada) */}
      <h3>Reservados</h3>
      <div className="cards">
        {bookedTimes.length === 0 ? (
          <p>No hay reservas para esta fecha.</p>
        ) : (
          bookedTimes.map((t) => <BookingSlot key={`b-${t}`} time={t} status="booked" />)
        )}
      </div>
    </section>
  );
}
