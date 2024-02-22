var express = require('express');
var router = express.Router();
const flightCtrl = require('../controllers/flights')

// all of these routes are prepended with /flights
// because of this line of code in the server.js
// app.use('/flights', flightRouter);

//GET request to /flights
router.get('/', flightCtrl.index)
//get requests to /flights/new
router.get('/new', flightCtrl.new)

//Post request to /flights
router.post('/', flightCtrl.create)
router.get('/:id', flightCtrl.show)

module.exports = router;
