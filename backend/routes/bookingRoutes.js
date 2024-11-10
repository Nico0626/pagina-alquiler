// backend/routes/bookingRoutes.js
const express = require('express');
const router = express.Router();
const { getBookings, createBooking } = require('../controllers/bookingController');

router.get('/:propertyId', getBookings);
router.post('/', createBooking);

module.exports = router;
