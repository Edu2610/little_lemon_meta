// src/components/BookingSlot.jsx
import React from "react";

export default function BookingSlot({ time, status = "available" }) {
  const isBooked = status === "booked";
  return (
    <div className="card" aria-live="polite">
      <div className="flex items-center justify-between">
        <strong>{time}</strong>
        <span
          style={{
            fontSize: 12,
            padding: "2px 8px",
            borderRadius: 12,
            border: "1px solid var(--border)",
            background: isBooked ? "#ffe8e8" : "#e8fff0",
            color: isBooked ? "#a22020" : "#1b6e2e",
          }}
        >
          {isBooked ? "Booked" : "Available"}
        </span>
      </div>
    </div>
  );
}
