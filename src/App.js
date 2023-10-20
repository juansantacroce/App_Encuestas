import React, { useState } from 'react';
import './App.css';

import Encuestas from './components/Encuestas';

function App(){
  const encuestas = [
    {id:1, pregunta: '¿Cual es tu color favorito?', opciones: ['Rojo', 'Azul', 'Verde']},
    {id:2, pregunta: '¿Cual es tu comida favorita?', opciones: ['Asado', 'Pizza', 'Sushi']},
    {id:3, pregunta: '¿Cual fue el nombre de tu primera mascota?', opciones: ['Bobby', 'Fatiga', 'Secretariat']}
  ];
  return(
    <div className='App'>
      <h1>Aplicacion de Encuestas</h1>
      <Encuestas encuestas={encuestas}/>
    </div>
  )
}
export default App;