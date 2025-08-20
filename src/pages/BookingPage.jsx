// src/pages/BookingPage.jsx
import React from "react";
import BookingForm from "../components/BookingForm.jsx";
import BookingSlotsList from "../components/BookingSlotsList.jsx";

export default function BookingPage({
  availableTimes,
  dispatchAvailableTimes,
  onSubmitReservation,
  selectedDate,
  onDateChange,
  bookedTimes,
}) {
  return (
    <div className="stack">
      <section className="section">
        <h1 style={{ marginTop: 0 }}>Reservar una mesa</h1>
        <p>Selecciona una fecha y horario para tu reserva.</p>

        <BookingForm
          availableTimes={availableTimes}
          dispatchAvailableTimes={dispatchAvailableTimes}
          onSubmitReservation={onSubmitReservation}
          onDateChange={onDateChange}
        />
      </section>

      <BookingSlotsList
        availableTimes={availableTimes}
        bookedTimes={bookedTimes}
      />
    </div>
  );
}
