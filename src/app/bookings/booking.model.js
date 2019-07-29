const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    username: { type: String, required: true },
    listingId: {type: String, required: true },
    dateFrom: {type: String, required: true},
    dateTo: {type: String, required: true}
});

schema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("Booking", schema);