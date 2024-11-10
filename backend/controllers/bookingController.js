// backend/controllers/bookingController.js
const Booking = require('../models/Booking');

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ propertyId: req.params.propertyId, isPaid: true });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las reservas' });
  }
};

exports.createBooking = async (req, res) => {
  const { propertyId, startDate, endDate, customerEmail, totalPrice } = req.body;
  try {
    const newBooking = new Booking({ 
      propertyId, 
      startDate: new Date(startDate), 
      endDate: new Date(endDate), 
      customerEmail, 
      totalPrice,
      isPaid: false 
    });
    await newBooking.save();
    res.json(newBooking);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la reserva' });
  }
};
