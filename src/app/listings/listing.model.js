const mongoose = require('mongoose');

const PropertyModel = mongoose.Schema({
    property_name: {
        type: String,
        required: true
    },
    property_location: {
        type: String,
        required: true
    },
    property_price: {
        type: Number,
        required: true
    },
    property_image_url: {
        type: String,
        required: true
    },
    user_id: String
});

module.exports = mongoose.model('Properties', PropertyModel);