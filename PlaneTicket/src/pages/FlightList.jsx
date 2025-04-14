import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FlightContext } from '../components/FlightProvider';

export default function FlightList() {
  const { flights } = useContext(FlightContext);
  const navigate = useNavigate();

  function handleClick(id) {
    navigate(`/booking/${id}`);
  }

  return (
    <div>
      <h2>Ұшақ рейстері</h2>
      <input type="text" placeholder='Қайда немесе қайдан іздеу...' />

      <div>
        {flights.map(flight => (
          <div key={flight.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <h3>{flight.from} → {flight.to}</h3>
            <p>Уақыты: {flight.time}</p>
            <p>Бағасы: {flight.price} ₸</p>
            <p>Әуекомпания: {flight.airLine}</p>
            <p>Орындар саны: {flight.seats}</p>

            <button onClick={() => handleClick(flight.id)}>Брондау</button>
          </div>
        ))}
      </div>
    </div>
  );
}


