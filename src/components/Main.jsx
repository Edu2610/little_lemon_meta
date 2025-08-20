// src/components/Main.jsx
import React, { useReducer, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import BookingPage from "../pages/BookingPage.jsx";
import ConfirmedBooking from "../pages/ConfirmedBooking.jsx";

// ⬇️ Importa tu API modular (no window.*)
import { fetchAPI, submitAPI } from "../api";


/* Estado inicial de horarios: usa la API para "hoy" */
export function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

/* Reducer conectado a la API */
export function updateTimes(state, action) {
  switch (action.type) {
    case "date_changed": {
      // payload: "YYYY-MM-DD"
      const dateObj = action.payload ? new Date(action.payload) : new Date();
      return fetchAPI(dateObj);
    }
    case "slot_booked":
      return state.filter((t) => t !== action.payload);
    case "slot_released": {
      const next = Array.from(new Set([...state, action.payload]));
      return next.sort();
    }
    default:
      return state;
  }
}

export default function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes);

  // Fecha por defecto (hoy) para que el form tenga horarios desde el inicio
  const todayStr = new Date().toISOString().slice(0, 10);
  const [selectedDate, setSelectedDate] = useState(todayStr);

  // Mapa: { "YYYY-MM-DD": ["18:00","20:00"], ... }
  const [bookingsByDate, setBookingsByDate] = useState({});

  const navigate = useNavigate();

  const handleDateChange = (dateStr) => {
    setSelectedDate(dateStr);
    dispatch({ type: "date_changed", payload: dateStr });
  };

  const submitForm = (formData) => {
    const ok = submitAPI(formData);
    if (ok) {
      // Actualiza estado local y disponibilidad
      setBookingsByDate((prev) => {
        const prevForDate = prev[formData.date] ?? [];
        return { ...prev, [formData.date]: [...prevForDate, formData.time] };
      });
      dispatch({ type: "slot_booked", payload: formData.time });

      // Navega a la página de confirmación con los datos
      navigate("/booking/confirmed", { state: formData, replace: true });
    } else {
      alert("No se pudo registrar la reserva. Intenta nuevamente.");
    }
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
              availableTimes={availableTimes}
              dispatchAvailableTimes={dispatch}   // si tu form lo usa
              onSubmitReservation={submitForm}    // ← usar submitForm
              selectedDate={selectedDate}
              onDateChange={handleDateChange}
              bookedTimes={bookedTimesForSelectedDate}
            />
          }
        />
        <Route path="/booking/confirmed" element={<ConfirmedBooking />} />

        <Route path="/menu" element={<Navigate to="/" replace />} />
        <Route path="/about" element={<Navigate to="/" replace />} />
        <Route path="/contacto" element={<Navigate to="/" replace />} />
        <Route
          path="*"
          element={
            <div className="section">
              <h2>Página no encontrada</h2>
            </div>
          }
        />
      </Routes>
    </main>
  );
}
