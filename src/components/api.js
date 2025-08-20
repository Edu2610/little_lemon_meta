// Simulación determinista: cambia los horarios según el día del mes
export function fetchTimes(dateStr) {
  const base = ["17:00", "18:00", "19:00", "20:00", "21:00"];
  if (!dateStr) return base;
  const day = Number(dateStr.split("-")[2] || 1);
  // pares: quitar 19:00; impares: quitar 20:00 (solo para ver cambios)
  return base.filter((t) => (day % 2 === 0 ? t !== "19:00" : t !== "20:00"));
}
