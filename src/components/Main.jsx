// src/components/Main.jsx
import React, { useReducer, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import BookingPage from "../pages/BookingPage.jsx";

/* ---- Horarios base ---- */
function initializeTimes() {
  return ["17:00", "18:00", "19:00", "20:00", "21:00"];
}

/* ---- Reducer de availableTimes ---- */
function updateTimes(state, action) {
  switch (action.type) {
    case "date_changed": {
      // Por ahora devolvemos siempre el mismo set (mock).
      // Más adelante, aquí llamarías a una API en un efecto/lógica aparte
      // y harías dispatch con los tiempos resultantes.
      return initializeTimes();
    }
    case "slot_booked": {
      // Remueve el time reservado del array disponible
      return state.filter((t) => t !== action.payload);
    }
    case "slot_released": {
      // Reincorpora un time y lo ordena (opcional)
      const next = Array.from(new Set([...state, action.payload]));
      return next.sort();
    }
    default:
      return state;
  }
}

export default function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes);

  // Fecha seleccionada (levantada desde el formulario)
  const [selectedDate, setSelectedDate] = useState("");

  // Mapa de reservas por fecha: { "2025-08-19": ["18:00", "20:00"], ... }
  const [bookingsByDate, setBookingsByDate] = useState({});

  const handleDateChange = (dateStr) => {
    setSelectedDate(dateStr);
    dispatch({ type: "date_changed", payload: dateStr });
  };

  const handleSubmitReservation = ({ date, time, guests, occasion }) => {
    // Guarda la reserva en el mapa por fecha
    setBookingsByDate((prev) => {
      const prevForDate = prev[date] ?? [];
      return { ...prev, [date]: [...prevForDate, time] };
    });
    // Saca ese horario de los disponibles actuales
    dispatch({ type: "slot_booked", payload: time });
    // Aquí podrías: llamar a API, navegar, mostrar confirmación, etc.
  };

  const bookedTimesForSelectedDate = bookingsByDate[selectedDate] ?? [];

  return (
    <main id="contenido" className="stack">
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/booking"
          element={
            <BookingPage
              /* Estado global de reservas y disponibilidad */
              availableTimes={availableTimes}
              dispatchAvailableTimes={dispatch}
              onSubmitReservation={handleSubmitReservation}
              selectedDate={selectedDate}
              onDateChange={handleDateChange}
              bookedTimes={bookedTimesForSelectedDate}
            />
          }
        />

        {/* Placeholders y 404 */}
        <Route path="/menu" element={<Navigate to="/" replace />} />
        <Route path="/about" element={<Navigate to="/" replace />} />
        <Route path="/contacto" element={<Navigate to="/" replace />} />
        <Route path="*" element={<div className="section"><h2>Página no encontrada</h2></div>} />
      </Routes>
    </main>
  );
}
