import React, { useState, createContext } from 'react';

export const FlightContext = createContext();

export default function FlightProvider({ children }) {
  const [flights, setFlights] = useState([
    { id: 1, from: 'Almaty', to: 'Astana', price: 25000, time: '10:00', airLine: 'Air Astana', seats: 50 },
    { id: 2, from: 'Almaty', to: 'Shynkent', price: 30000, time: '14:30', airLine: 'SCAT', seats: 45 },
    { id: 3, from: 'Astana', to: 'Almaty', price: 28000, time: '16:00', airLine: 'Qazaq Air', seats: 60 }
  ]);

  const [booking, setBooking] = useState(() => {
    const saved = localStorage.getItem('bookings');
    return saved ? JSON.parse(saved) : [];
  });

  return (
    <FlightContext.Provider value={{ flights, setFlights, booking, setBooking }}>
      {children}
    </FlightContext.Provider>
  );
}

