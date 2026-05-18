import { useState, useEffect } from "react";
import './barraLateral.css';

function barraLateral(props) {
  return (
    <>
      <div>
        <h3>{props.icono}{props.numero}</h3>
      </div>
    </>
  );
}