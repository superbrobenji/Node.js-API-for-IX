const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    username: { type: String, required: true },
    name: {type: String, required: true},
    location: {type: String, required: true},
    price: {type: String, required: true},
    booked: {type: Boolean, required: true},
    bookId: {type: String, required: false},
    imageUrl: {type: String, required: false},
    date: {type: String, required: true}
});

schema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("Listing", schema);