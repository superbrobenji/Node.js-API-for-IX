const express = require('express');
const router = express.Router();
const Property = require('./listing.model');

//Method to get all Properties
router.get('/', async(req, res) => {
    const _properties = await Property.find();
    res.json(_properties);
});

//Get a specific property by their id
router.get('/:id', async(req, res) => {
    const _property = await Property.findById(req.params.id)
        .then(() => {
            res.json(_property);
        })
        .catch(err => {
            res.json({ msg: err });
        });
});

//create a new property
router.post('/', (req, res) => {
    const _new_property = new Property({
        property_name: req.body.property_name,
        property_location: req.body.property_location,
        property_price: req.body.property_price,
        property_image_url: req.body.property_image_url
    });

    _new_property.save().then(data => {
        res.json({ msg: 'New property has successfully been loaded' });
    }).catch(err => {
        // res.json({ msg: 'Failed to added property to Database' });
        res.json({ msg: err });
    });
});

//update property features, price etc.
router.put('/:id', async(req, res) => {
    try {
        const _property = await Property.updateOne({ _id: req.params.id }, {
            $set: {
                property_name: req.body.property_name,
                property_location: req.body.property_location,
                property_price: req.body.property_price,
                property_image_url: req.body.property_image_url
            }
        });
        res.json({ msg: "Property was updated successfully" });
    } catch (err) {
        res.json({ msg: "Failed to update the requested property" })
    }
});

//delete property by id
router.delete('/:id', async(req, res) => {

    Property.deleteOne({ _id: req.params.id }).then(
            () => res.json({ msg: 'Property was deleted' }))
        .catch(() => res.json({ msg: 'Unable to delete property' }));
});
module.exports = router;