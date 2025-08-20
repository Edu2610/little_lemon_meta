// src/components/BookingForm.jsx
import React, { useState } from "react";

export default function BookingForm({
  availableTimes,
  dispatchAvailableTimes,
  onSubmitReservation,
  onDateChange,
}) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState("ninguna");

  const isValid = date && time && Number(guests) >= 1 && Number(guests) <= 12;

// dentro de BookingForm.jsx
const handleDate = (e) => {
  const val = e.target.value;
  setDate(val);
  onDateChange?.(val); // el padre (Main) dispara la carga
  setTime(""); // opcional: limpiar hora
};


  const handleSubmit = (e) => {
  e.preventDefault();
  if (!isValid) return;

  const payload = { date, time, guests: Number(guests), occasion };
  onSubmitReservation?.(payload);  // <- navega si la API responde true
};

  return (
    <form
      onSubmit={handleSubmit}
      className="stack"
      style={{ display: "grid", maxWidth: 360, gap: 20 }}
      aria-labelledby="booking-form-title"
    >
      <h2 id="booking-form-title">Reserva tu mesa</h2>

      <label htmlFor="res-date">Choose date</label>
      <input id="res-date" type="date" value={date} onChange={handleDate} required />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        <option value="" disabled>-- Select time --</option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        id="guests"
        type="number"
        min="1"
        max="12"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="ninguna">Ninguna</option>
        <option value="cumpleaños">Birthday</option>
        <option value="aniversario">Anniversary</option>
      </select>

      <button type="submit" className="btn" disabled={!isValid}>
        Submit reservation
      </button>
    </form>
  );
}
