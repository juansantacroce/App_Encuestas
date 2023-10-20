import React from "react";
import { useState } from 'react';

function Encuestas({ encuestas }) {
    return (
      <ul>
        {encuestas.map((encuesta) => (
          <li key={encuesta.id}>
            <p>{encuesta.pregunta}</p>
            <ul>
              {encuesta.opciones.map((opcion, index) => (
                <li key={index}>{opcion}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    );
  }
  
  export default Encuestas;
  