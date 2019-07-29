const db = require("../_helpers/db");
const Listing = db.Listing;

module.exports = {
  update,
  create,
  getAll,
  getById,
  getByBookingId,
  delete: _delete
};

async function update(id, listingParam) {
  const listing = await Listing.findById(id);

  // validate
  if (!listing) throw "Listing not found";

  Object.assign(listing, listingParam);

  await listing.save();
}

async function create(listingParam) {
    const listing = new Listing(listingParam);
  
    await listing.save();
}

async function getByBookingId(bookingId){
    await Listing.findOne({ bookingId: bookingId }).select("-hash");
}

async function getAll() {
  return await Listing.find().select("-hash");
}

async function getById(id) {
  return await Listing.findById(id).select("-hash");
}

async function _delete(id) {
  await User.findByIdAndRemove(id);
}
