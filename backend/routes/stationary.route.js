let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Stationary Model
let stationarySchema = require('../models/Stationary');

// CREATE Stationary
router.route('/create-item').post((req, res, next) => {
  stationarySchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ Stationary
router.route('/').get((req, res) => {
  stationarySchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Stationary
router.route('/edit-item/:id').get((req, res) => {
  stationarySchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Stationary
router.route('/update-item/:id').put((req, res, next) => {
  stationarySchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      console.log(error)
      return next(error);
    } else {
      res.json(data)
      console.log('Item updated successfully !')
    }
  })
})

// Delete Stationary
router.route('/delete-item/:id').delete((req, res, next) => {
  stationarySchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;