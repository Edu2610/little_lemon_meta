// src/components/Main.jsx
import React, { useReducer, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import BookingPage from "../pages/BookingPage.jsx";

/* Utilidad segura para llamar a la API global sin romper si no está */
function safeFetchAPI(dateObj) {
  try {
    if (typeof window !== "undefined" && typeof window.fetchAPI === "function") {
      return window.fetchAPI(dateObj);
    }
  } catch {}
  // Fallback si no está la API cargada
  return ["17:00", "18:00", "19:00", "20:00", "21:00"];
}
function safeSubmitAPI(formData) {
  try {
    if (typeof window !== "undefined" && typeof window.submitAPI === "function") {
      return window.submitAPI(formData);
    }
  } catch {}
  return false; // si no hay API, consideramos fallo
}

/* ---- Estado inicial de horarios: usa la API para "hoy" ---- */
export function initializeTimes() {
  const today = new Date();
  return safeFetchAPI(today);
}

/* ---- Reducer de availableTimes conectado a la API ---- */
export function updateTimes(state, action) {
  switch (action.type) {
    case "date_changed": {
      // action.payload debe ser un string "YYYY-MM-DD"
      const dateObj = action.payload ? new Date(action.payload) : new Date();
      const times = safeFetchAPI(dateObj);
      return times;
    }
    case "slot_booked": {
      return state.filter((t) => t !== action.payload);
    }
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

  // Selecciona por defecto "hoy" para que el form ya tenga horarios
  const todayStr = new Date().toISOString().slice(0, 10);
  const [selectedDate, setSelectedDate] = useState(todayStr);

  // Mapa de reservas por fecha: { "YYYY-MM-DD": ["18:00", "20:00"], ... }
  const [bookingsByDate, setBookingsByDate] = useState({});

  const handleDateChange = (dateStr) => {
    setSelectedDate(dateStr);
    dispatch({ type: "date_changed", payload: dateStr });
  };

  const handleSubmitReservation = ({ date, time, guests, occasion }) => {
    const payload = { date, time, guests, occasion };
    const ok = safeSubmitAPI(payload);
    if (ok) {
      // Persistimos la reserva en el estado local y actualizamos disponibilidad
      setBookingsByDate((prev) => {
        const prevForDate = prev[date] ?? [];
        return { ...prev, [date]: [...prevForDate, time] };
      });
      dispatch({ type: "slot_booked", payload: time });
      // Aquí podrías navegar a una página de confirmación
      // e.g., useNavigate()('/booking/confirmed', { state: payload })
    } else {
      // Manejo simple de error (puedes mejorar con toasts/modales)
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
              dispatchAvailableTimes={dispatch}  // por si tu BookingForm lo usa
              onSubmitReservation={handleSubmitReservation}
              selectedDate={selectedDate}
              onDateChange={handleDateChange}
              bookedTimes={bookedTimesForSelectedDate}
            />
          }
        />
        <Route path="/menu" element={<Navigate to="/" replace />} />
        <Route path="/about" element={<Navigate to="/" replace />} />
        <Route path="/contacto" element={<Navigate to="/" replace />} />
        <Route path="*" element={<div className="section"><h2>Página no encontrada</h2></div>} />
      </Routes>
    </main>
  );
}
