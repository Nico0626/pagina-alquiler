import React, { useState } from 'react';
import './style.css';

function App() {
  // Fechas de disponibilidad para el alquiler
  const [disponibilidad, setDisponibilidad] = useState([
    { fecha: '2024-11-01', disponible: true },
    { fecha: '2024-11-02', disponible: true },
    { fecha: '2024-11-03', disponible: false },
    { fecha: '2024-11-04', disponible: true },
  ]);

  const handleReserva = (fechaSeleccionada) => {
    // Actualizar el estado para marcar la fecha como no disponible
    setDisponibilidad(prevState =>
      prevState.map(item =>
        item.fecha === fechaSeleccionada
          ? { ...item, disponible: false } // Marcar como no disponible
          : item
      )
    );

    // Mostrar un mensaje o realizar acciones adicionales
    alert(`¡Reserva confirmada para el ${fechaSeleccionada}!`);
  };

  return (
    <div className="alquiler">
      <img src="imagen-alquiler.jpg" alt="Imagen del alquiler" />
      <h2>Alquiler 1</h2>
      <p>Precio: $100/noche</p>
      <div className="fechas">
        {disponibilidad.map((item) => (
          <div
            key={item.fecha}
            className={`fecha ${item.disponible ? 'disponible' : 'no-disponible'}`}
            data-fecha={item.fecha}
            onClick={() => item.disponible && handleReserva(item.fecha)} // Solo permite hacer click si está disponible
          >
            {item.fecha.slice(8, 10)} {/* Extrae solo el día */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
