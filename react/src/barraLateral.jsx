import { useState, useEffect } from "react";
import FotoPerfil from './fotoPerfil.jsx'
import './barraLateral.css'

function BarraLateral() {
  return (
    <>
      <div class="BarraLateral">
        <FotoPerfil foto={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIrqw-QTCLrK4VmDg9NHXopnnjqhqv9HTdiQ&s"}/>
        <h2>Javier Martinez</h2>
        <h3>nobcavs911</h3>
        <div>
            <cajaLikesSeguidores icono={"👍"} numero={"7"}/>
            <cajaLikesSeguidores icono={"👤"} numero={"11"}/>
        </div>
        <opcionesBarraLateral/>
      </div>
    </>
  );
}
export default BarraLateral;