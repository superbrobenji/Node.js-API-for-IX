const mongoose = require('mongoose');

const BookingModel = mongoose.Schema({
    date_from: {
        type: String,
        required: true 
    },
    date_to: {
        type: String,
        required: true 
    },
    user_id: String,
    property_id: String,
    booking_status: String
});

module.exports = mongoose.model('Booking', BookingModel);