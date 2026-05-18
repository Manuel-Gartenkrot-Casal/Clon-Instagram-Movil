import { useState } from "react";
import './tituloSeccion.css';

function TituloSeccion() {
  const [titulos, setTitulos] = useState(["Stories", "Trending"]);

  return (
    <>
      {titulos.map((titulo, index) => (
        <div key={index}>
          <h1>{titulo}</h1>
        </div>
      ))}
    </>
  );
}