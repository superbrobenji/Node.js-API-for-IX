const db = require("../_helpers/db");
const Booking = db.Booking;

module.exports = {
  update,
  create
};

async function update(id, bookingParam) {
  const booking = await Booking.findById(id);

  // validate
  if (!booking) throw "Booking not found";

  Object.assign(booking, bookingParam);

  await booking.save();
}

async function create(bookingParam) {
  const booking = new Booking(bookingParam);

  await booking.save();
}
