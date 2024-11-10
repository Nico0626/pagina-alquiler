// backend/models/Booking.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  propertyId: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  isPaid: {
    type: Boolean,
    default: false,
  },
  customerEmail: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Booking', bookingSchema);
