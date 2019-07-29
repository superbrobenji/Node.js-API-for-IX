const express = require("express");
const router = express.Router();
const listingService = require("./listing.service");

// routes
router.post("/create", create);
router.get("/", getAll);
router.get("/:id", getById);
router.delete("/:id", _delete);
router.patch("/:id", update);
router.get("/booking/:id", getByBookingId);

function create(req, res, next) {
  listingService
    .create(req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function getByBookingId(req, res, next) {
  listingService
    .getByBookingId(req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function getAll(req, res, next) {
  listingService
    .getAll()
    .then(listings => res.json(listings))
    .catch(err => next(err));
}

function getById(req, res, next) {
  listingService
    .getById(req.params.id)
    .then(listing => (listing ? res.json(listing) : res.sendStatus(404)))
    .catch(err => next(err));
}

function update(req, res, next) {
  listingService
    .update(req.params.id, req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function _delete(req, res, next) {
  listingService
    .delete(req.params.id)
    .then(() => res.json({}))
    .catch(err => next(err));
}

module.exports = router;
