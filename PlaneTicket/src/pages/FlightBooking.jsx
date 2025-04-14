import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FlightContext } from '../components/FlightProvider';

export default function FlightBooking() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { flights, setFlights, booking, setBooking } = useContext(FlightContext);

  const [formData, setFormData] = useState({
    passengerName: '',
    selectedDate: '',
    selectedSeat: '',
  });

  const [flight, setFlight] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFlightDetails();
  }, []);

  const fetchFlightDetails = () => {
    const selectedFlight = flights.find(f => f.id === parseInt(id));
    setFlight(selectedFlight);
    setLoading(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBooking = (e) => {
    e.preventDefault();

    if (!formData.passengerName || !formData.selectedDate || !formData.selectedSeat) {
      alert('Барлық өрістерді толтырыңыз!');
      return;
    }

    if (flight.seats <= 0) {
      alert('Өкінішті, бұл рейсте бос орын жоқ.');
      return;
    }

    const newBookings = [...booking, bookingData];
    setBooking(newBookings);
    localStorage.setItem('bookings', JSON.stringify(newBookings));

    const updatedFlights = flights.map(f => {
      if (f.id === flight.id) {
        return { ...f, seats: f.seats - 1 };
      }
      return f;
    });

    setFlights(updatedFlights);

    alert('Брондау сәтті жасалды!');
    navigate('/');
  };

  const handleClick = () => {
    navigate('/');
  };

  if (loading || !flight) return <p>Жүктелуде...</p>;

  return (
    <div style={{ padding: '30px', background: '#f0fff4' }}>
      <button onClick={handleClick}>← Артқа</button>
      <h2 style={{ textAlign: 'center' }}>Брондау</h2>

      <div style={{
        display: 'flex', gap: '30px', justifyContent: 'center',
        background: 'white', padding: '20px', borderRadius: '10px'
      }}>
        <div style={{ flex: 1 }}>
          <h3><b>{flight.from}</b> ✈️ <b>{flight.to}</b></h3>
          <p>Уақыты: {flight.time}</p>
          <p>Әуекомпания: {flight.airLine}</p>
          <p>Бағасы: {flight.price} KZT</p>
          <p>Қалған орындар: {flight.seats}</p>
        </div>

        <form onSubmit={handleBooking} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <label>Жолаушы аты-жөні:</label>
          <input type="text" name="passengerName" value={formData.passengerName} onChange={handleChange} required />

          <label>Ұшу күні:</label>
          <input type="date" name="selectedDate" value={formData.selectedDate} onChange={handleChange} required />

          <label>Орын таңдау:</label>
          <select name="selectedSeat" value={formData.selectedSeat} onChange={handleChange} required>
            <option value="">Орын таңдаңыз</option>
            <option value="1A">1A</option>
            <option value="2B">2B</option>
            <option value="3C">3C</option>
          </select>

          <button type="submit" style={{
            background: '#10b981', color: 'white', padding: '10px',
            borderRadius: '5px', border: 'none'
          }}>
            Брондауды растау
          </button>
        </form>
      </div>
    </div>
  );
}



