import { useState } from "react";
import './opcionesBarraLateral.css';

function OpcionesBarraLateral() {
  const [opciones, setOpciones] = useState([
    { id: 1, emoji: "🏠", label: "Home" },
    { id: 2, emoji: "🔍", label: "Explore" },
    { id: 3, emoji: "🎬", label: "Reels" },
    { id: 4, emoji: "📺", label: "IGTV" },
    { id: 5, emoji: "🔔", label: "Notifications" },
  ]);

  return (
    <>
      <div>
        {opciones.map((opcion) => (
          <div key={opcion.id}>
            <span>{opcion.emoji}</span>
            <span>{opcion.label}</span>
          </div>
        ))}
      </div>
    </>
  );
}