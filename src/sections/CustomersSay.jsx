import React from "react";

const reviews = [
  { id: 1, name: "Ana", rating: 5, text: "Comida increíble y servicio excelente.", avatar: "/avatar-1.png" },
  { id: 2, name: "Luis", rating: 4, text: "Ambiente acogedor, volveré pronto.", avatar: "/avatar-2.png" },
  { id: 3, name: "María", rating: 5, text: "El hummus es espectacular.", avatar: "/avatar-3.png" },
];

function Stars({ rating }) {
  return <span aria-label={`${rating} de 5 estrellas`}>{"★".repeat(rating)}{"☆".repeat(5 - rating)}</span>;
}

export default function CustomersSay() {
  return (
    <section className="section">
      <h2>Opiniones de clientes</h2>
      <div className="cards">
        {reviews.map(r => (
          <article key={r.id} className="card">
            <div className="inline items-center gap-md">
              <img src={r.avatar} alt={r.name} width="44" height="44" style={{ borderRadius: "50%" }} />
              <div>
                <strong>{r.name}</strong>
                <div><Stars rating={r.rating} /></div>
              </div>
            </div>
            <p style={{ marginTop: 8 }}>{r.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
