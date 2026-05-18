import { useState, useEffect } from "react";
import './barraLateral.css';

function barraLateral(props) {
  return (
    <>
      <div>
        <FotoPerfil foto={props.foto}/>
        <h2>{props.nombre}</h2>
        <h3>{props.username}</h3>
        <cajaLikesSeguidores/>
        <opcionesBarraLateral/>
      </div>
    </>
  );
}