// frontend/src/components/DateSelector.js
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { API_URL } from '../config';

const DateSelector = ({ propertyId }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [bookedDates, setBookedDates] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/api/bookings/${propertyId}`)
      .then((res) => {
        const dates = res.data.flatMap((booking) => {
          const range = [];
          let currentDate = new Date(booking.startDate);
          const stopDate = new Date(booking.endDate);
          while (currentDate <= stopDate) {
            range.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
          }
          return range;
        });
        setBookedDates(dates);
      })
      .catch((error) => console.error('Error al cargar fechas reservadas:', error));
  }, [propertyId]);

  const handleBooking = () => {
    axios.post(`${API_URL}/api/bookings`, {
      propertyId,
      startDate,
      endDate,
      customerEmail: "cliente@example.com",
      totalPrice: 100, // Precio total puede ser calculado dinámicamente
    })
    .then(() => alert("Reserva creada. Completa el pago."))
    .catch((error) => console.error('Error al crear reserva:', error));
  };

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        startDate={startDate}
        endDate={endDate}
        excludeDates={bookedDates}
        selectsRange
      />
      <button onClick={handleBooking} disabled={!startDate || !endDate}>Reservar</button>
    </div>
  );
};

export default DateSelector;
