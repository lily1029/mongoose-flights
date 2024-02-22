//import model, so we can talk to the database
const FlightModel = require('../models/flight')

module.exports = {
    index,
    new: newFlight,
    create, 
    show
}

async function index(req, res) {
    // then we want to send a ejs page with all the flights to the browser
    try {
        // We want our model to go to the database and get all the flights
        // .find({}) is mongoose model query method
        const flightDocFromTheDB = await FlightModel.find({})
        console.log(flightDocFromTheDB)

        // then we want to send a ejs page with all the flights to the browser
        // movies/index is looking in the views folder for the ejs page
        res.render('flights/index', { flightDocs: flightDocFromTheDB })
        //flightDocs is now a variables inside of views/movies/index.ejs 
    } catch (err) {
        console.log(err)
        res.redirect('/')

    }
}


function newFlight(req, res) {

    res.render('flights/new')
    
}

async function create(req, res){
    console.log(req.body, "<- is the contents of the form")
    try{
        const createFlightsInfo = await FlightModel.create(req.body);
        console.log(createFlightsInfo)

        res.redirect('/flights/new')

    }catch(err){
        console.log(err)
        res.redirect('/flights/new')

    }

}

async function show(req, res){
    try {
        const flightFromTheDatabase = await FlightModel.findById(req.params.id)
        console.log(flightFromTheDatabase);
        res.render('flights/show', {
            flight: flightFromTheDatabase
        })
    } catch (err) {
        res.send(err)
    }
}
