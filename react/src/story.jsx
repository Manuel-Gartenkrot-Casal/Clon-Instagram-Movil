import { useState, useEffect } from "react";
import './story.css';

function Story(props) {
  return (
    <>
      <div>
        <FotoPerfil />
        <h3>{props.username}</h3>
      </div>
    </>
  );
}