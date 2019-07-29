const express = require("express");
const router = express.Router();
const bookingService = require("./booking.service");

router.post("/create", create);
router.patch("/:id", update);

function create(req, res, next) {
  bookingService
    .create(req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function update(req, res, next) {
  bookingService
    .update(req.params.id, req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

module.exports = router;