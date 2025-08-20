import React, { useState, useMemo } from "react";

export default function BookingForm({
  availableTimes = [],
  onSubmitReservation,
  onDateChange,
}) {
  // Estado controlado
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState("ninguna");

  // Touched para mostrar errores al interactuar
  const [touched, setTouched] = useState({
    date: false,
    time: false,
    guests: false,
    occasion: false,
  });

  // --- HTML5 helpers ---
  const todayStr = new Date().toISOString().slice(0, 10); // yyyy-mm-dd

  // --- Reglas de validación (React) ---
  const errors = useMemo(() => {
    const e = {};
    if (!date) e.date = "Selecciona una fecha.";
    else if (date < todayStr) e.date = "La fecha no puede estar en el pasado.";

    if (!time) e.time = "Selecciona un horario.";

    const g = Number(guests);
    if (!guests && guests !== 0) e.guests = "Indica cuántos comensales.";
    else if (Number.isNaN(g)) e.guests = "Debe ser un número.";
    else if (g < 1) e.guests = "Mínimo 1 comensal.";
    else if (g > 12) e.guests = "Máximo 12 comensales.";

    // occasion es opcional; si quieres forzar una, valida aquí.
    return e;
  }, [date, time, guests, todayStr]);

  const isValid = Object.keys(errors).length === 0;

  // --- Handlers ---
  const handleBlur = (field) => () =>
    setTouched((t) => ({ ...t, [field]: true }));

  const handleDate = (e) => {
    const val = e.target.value;
    setDate(val);
    onDateChange?.(val); // recarga horarios en el padre
    setTime(""); // limpia el time para evitar combinación inválida
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Marca todos como tocados para mostrar mensajes si falta algo
    setTouched({ date: true, time: true, guests: true, occasion: true });
    if (!isValid) return;

    const payload = {
      date,
      time,
      guests: Number(guests),
      occasion,
    };
    onSubmitReservation?.(payload);
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="stack"
      style={{ display: "grid", maxWidth: 380, gap: 16 }}
      aria-labelledby="booking-form-title"
    >
      <h2 id="booking-form-title">Reserva tu mesa</h2>

      {/* Fecha */}
      <label htmlFor="res-date">Choose date</label>
      <input
        id="res-date"
        type="date"
        value={date}
        onChange={handleDate}
        onBlur={handleBlur("date")}
        required
        min={todayStr}                // <-- HTML5: no permitir pasado
        aria-invalid={!!errors.date}
        aria-describedby={errors.date ? "date-error" : undefined}
      />
      {touched.date && errors.date && (
        <p id="date-error" role="alert" style={{ color: "#a22020", margin: 0 }}>
          {errors.date}
        </p>
      )}

      {/* Hora */}
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        onBlur={handleBlur("time")}
        required                       // <-- HTML5: requerido
        aria-invalid={!!errors.time}
        aria-describedby={errors.time ? "time-error" : undefined}
      >
        <option value="" disabled>
          -- Select time --
        </option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
      {touched.time && errors.time && (
        <p id="time-error" role="alert" style={{ color: "#a22020", margin: 0 }}>
          {errors.time}
        </p>
      )}

      {/* Comensales */}
      <label htmlFor="guests">Number of guests</label>
      <input
        id="guests"
        type="number"
        inputMode="numeric"
        min={1}                        // <-- HTML5: rango
        max={12}
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        onBlur={handleBlur("guests")}
        required
        aria-invalid={!!errors.guests}
        aria-describedby={errors.guests ? "guests-error" : "guests-help"}
      />
      {touched.guests && errors.guests ? (
        <p id="guests-error" role="alert" style={{ color: "#a22020", margin: 0 }}>
          {errors.guests}
        </p>
      ) : (
        <small id="guests-help" style={{ color: "var(--muted)" }}>
          Entre 1 y 12 personas.
        </small>
      )}

      {/* Ocasión (opcional) */}
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        onBlur={handleBlur("occasion")}
        aria-invalid={false}
      >
        <option value="ninguna">Ninguna</option>
        <option value="cumpleaños">Birthday</option>
        <option value="aniversario">Anniversary</option>
      </select>

      {/* Submit */}
      <button
        type="submit"
        className="btn"
        disabled={!isValid}            // <-- React: deshabilitar si inválido
        aria-disabled={!isValid}
      >
        Submit reservation
      </button>
    </form>
  );
}
