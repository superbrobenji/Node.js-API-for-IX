const express = require('express');
const router = express.Router();
const Booking = require('./booking.model');

//Get all bookings
router.get('/', async(req, res) => {
    const _bookings = await Booking.find();
    res.json(_bookings);
});

//Get a specific booking by id
router.get('/:id', async(req, res) => {

    try{
        const _booking = await Booking.findById(req.params.id);
        res.json(_booking);
    }catch (err){
        res.json({msg: 'Unknown Id'});
    }
});

//create booking
router.post('/', (req, res) => {
    const _new_booking = new Booking({
        date_from: req.body.date_from,
        date_to: req.body.date_to,
        user_id: req.body.user_id,
        property_id: req.body.property_id,
        booking_status: "NEW"
    });

    _new_booking.save().then(data => {
        res.json({ msg: 'Booking has been added successfully' });
    }).catch(err => {
        res.json({ msg: err });
    });
});

//update bookings by  specific id
router.put('/:id', async (req, res) => {
    try {
        const _booking = await Booking.updateOne({_id: req.params.id},
            {$set: {booking_status: req.body.booking_status}});
            res.json({msg: "Booking was updated successfully"});
    } catch (err) {
        res.json({msg: "Failed to update the requested booking"})
    }
});

//delete booking
router.delete('/:id', async (req, res) => {

    Booking.deleteOne({_id: req.params.id}).then(
            () => res.json({msg: 'Booking has been deleted successfully'}))
                .catch(() => res.json({msg: 'Unable to delete booking'}));
});
module.exports = router;