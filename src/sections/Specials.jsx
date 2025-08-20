import React from "react";

const specials = [
  { id: 1, title: "Ensalada Griega", desc: "Feta, kalamata, pepino, oliva.", img: "/dish-1.jpg" },
  { id: 2, title: "Pasta al Limón", desc: "Pasta fresca, salsa de limón y hierbas.", img: "/dish-2.jpg" },
  { id: 3, title: "Hummus Clásico", desc: "Garbanzos, tahini, limón y aceite de oliva.", img: "/dish-3.jpg" },
];

export default function Specials() {
  return (
    <section className="section">
      <div className="flex items-center justify-between">
        <h2>Especiales de la semana</h2>
        <a href="/menu" className="btn-outline">Ver todo</a>
      </div>

      <div className="cards">
        {specials.map(s => (
          <article key={s.id} className="card">
            <img
              src={s.img}
              alt={s.title}
              style={{ width: "100%", height: 160, objectFit: "cover", borderRadius: 8, marginBottom: 12 }}
            />
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
