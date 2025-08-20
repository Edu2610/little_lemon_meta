// API mock compatible con el curso (acepta Date)
export function fetchAPI(dateObj) {
  const base = ["17:00", "18:00", "19:00", "20:00", "21:00"];
  if (!(dateObj instanceof Date)) return base;
  const day = dateObj.getDate();
  // pares: quitar 19:00; impares: quitar 20:00 (solo para ver cambios)
  return base.filter((t) => (day % 2 === 0 ? t !== "19:00" : t !== "20:00"));
}

// Simulación de submit (éxito)
export function submitAPI(formData) {
  // console.log("submitAPI recibió:", formData);
  return true;
}