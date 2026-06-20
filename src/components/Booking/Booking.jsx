import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Booking.scss';

function Booking() {
  const [date, setDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);

  const availableTimes = [
    '09:00',
    '10:00',
    '11:00',
    '14:00',
    '15:00',
    '16:00',
  ];

  const handleBooking = () => {
    if (!selectedTime) {
      alert('Seleziona un orario');
      return;
    }

    alert(
      `Prenotazione confermata per il ${date.toLocaleDateString()} alle ${selectedTime}`
    );
  };

  return (
    <div className="booking">
      <h2>Prenota un appuntamento</h2>

      <div className="booking__calendar">
        <Calendar
          onChange={setDate}
          value={date}
          minDate={new Date()}
        />
      </div>

      <div className="booking__slots">
        <h3>Orari disponibili</h3>

        <div className="times">
          {availableTimes.map((time) => (
            <button
              key={time}
              className={`time-btn ${
                selectedTime === time ? 'active' : ''
              }`}
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </button>
          ))}
        </div>

        <button
          className="booking-btn"
          onClick={handleBooking}
        >
          Conferma prenotazione
        </button>
      </div>
    </div>
  );
}

export default Booking;