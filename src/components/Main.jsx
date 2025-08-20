// src/components/Main.jsx
import React, { useReducer, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import BookingPage from "../pages/BookingPage.jsx";
import ConfirmedBooking from "../pages/ConfirmedBooking.jsx";

/* Utilidades seguras para llamar a la API global */
function safeFetchAPI(dateObj) {
  try {
    if (typeof window !== "undefined" && typeof window.fetchAPI === "function") {
      return window.fetchAPI(dateObj);
    }
  } catch {}
  return ["17:00", "18:00", "19:00", "20:00", "21:00"]; // fallback
}

function safeSubmitAPI(formData) {
  try {
    if (typeof window !== "undefined" && typeof window.submitAPI === "function") {
      return window.submitAPI(formData);
    }
  } catch {}
  return false;
}

/* Estado inicial de horarios */
export function initializeTimes() {
  const today = new Date();
  return safeFetchAPI(today);
}

/* Reducer conectado a la API */
export function updateTimes(state, action) {
  switch (action.type) {
    case "date_changed": {
      const dateObj = action.payload ? new Date(action.payload) : new Date();
      return safeFetchAPI(dateObj);
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

  const todayStr = new Date().toISOString().slice(0, 10);
  const [selectedDate, setSelectedDate] = useState(todayStr);

  const [bookingsByDate, setBookingsByDate] = useState({});
  const navigate = useNavigate();

  const handleDateChange = (dateStr) => {
    setSelectedDate(dateStr);
    dispatch({ type: "date_changed", payload: dateStr });
  };

  const submitForm = (formData) => {
    const ok = safeSubmitAPI(formData);
    if (ok) {
      setBookingsByDate((prev) => {
        const prevForDate = prev[formData.date] ?? [];
        return { ...prev, [formData.date]: [...prevForDate, formData.time] };
      });
      dispatch({ type: "slot_booked", payload: formData.time });

      // Navegamos a la página de confirmación
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
              dispatchAvailableTimes={dispatch}
              onSubmitReservation={submitForm}
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
