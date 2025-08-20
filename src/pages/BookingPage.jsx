import React from "react";

export default function BookingPage() {
  return (
    <section className="section">
      <h1>Reservar una mesa</h1>
      <p>Completa el formulario para reservar. (Aquí luego añadiremos el formulario y la lógica.)</p>

      <form className="stack" style={{ maxWidth: 520, marginTop: 16 }}>
        <label>
          Fecha
          <input type="date" name="date" />
        </label>
        <label>
          Hora
          <input type="time" name="time" />
        </label>
        <label>
          Número de comensales
          <input type="number" name="guests" min="1" max="12" defaultValue={2} />
        </label>
        <label>
          Ocasión
          <select name="occasion" defaultValue="ninguna">
            <option value="ninguna">Ninguna</option>
            <option value="cumpleaños">Cumpleaños</option>
            <option value="aniversario">Aniversario</option>
          </select>
        </label>
        <button type="submit" className="btn">Reservar</button>
      </form>
    </section>
  );
}
