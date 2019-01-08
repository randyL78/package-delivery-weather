/* router for api/ routers */

// load dependencies
import express from 'express';
import mongoose from 'mongoose';

// load models
import Package from '../models/package';

// create connection to the database
mongoose.connect('mongodb://localhost:27017/packages', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, "MongoDB connection error:"));


// create the router
const router = express.Router();

// response message at base route to ensure everything is working
router.get('/', (req, res) => {
  res.send(`<h1>You have reached the server API for the package weather app</h1>`)
});

/* routes for handling database connections */
/* **************************************** */

// get the list of packages
router.get('/packages', (req, res) => {
  Package.find((err, packages) => {
    if (err)
      return  res.json({success: false, error: err});
    
    return  res.json({success: true, packages});
  });
});

// add a new package to the list
router.post('/packages', (req, res) => {

  // use parcel instead of package, because package is reserved keyword
  const parcel = new Package();

  // deconstruct request body to get info we need
  const { product, trackingNumber, carrier, address, city, zipcode, state } = req.body;

  // prevalidate required data
  if(!trackingNumber || !carrier)
    return  res.json({success: false, error: "You must provide a tracking number and the carrier"});

  // add each of the fields to the entry
  parcel.product = product;
  parcel.trackingNumber = trackingNumber;
  parcel.carrier = carrier;
  parcel.address = address;
  parcel.city = city;
  parcel.zipcode = zipcode;
  parcel.state = state;
  parcel.save(error => {
    if (error)
      return  res.json({success: false, error});

     res.json({success: true });
  });
});

// make a change to a package
router.put('/packages/:packageId', (req, res) => {
  
  const packageId = req.params.packageId;

  // deconstruct request body to get info we need
  const { product, trackingNumber, carrier, address, city, zipcode, state } = req.body;


  Package.findById(packageId, (error, parcel) => {
    if (error) 
      return  res.json({success: false, error});

    // check if each field exists, and if so update it
    if(product)
      parcel.product = product;
    if(trackingNumber)
      parcel.trackingNumber = trackingNumber;
    if(carrier)
      parcel.carrier = carrier;
    if(address)
      parcel.address = address;
    if(city)
      parcel.city = city;
    if(zipcode)
      parcel.zipcode = zipcode;
    if(state)
      parcel.state = state;

    // save canges to package
    parcel.save(error => {
      if (error)
      return  res.json({success: false, error});

     res.json({success: true });
    });  
  });
});

// delete a package
router.delete('/packages/:packageId', (req, res) => {

  const packageId = req.params.packageId;

  Package.findByIdAndDelete(packageId, (error, parcel) => {
    if (err) 
      return  res.json({success: false, error });

    return  res.json({success: true});
  })
});


/* routes for Ups API */
/* ****************** */

// get tracking information for a single package using UPS
router.get('/tracking/:trackingId', (req, res) => {
  res.send(`<h1>Getting delivery information</h1>`);
});

/* routes for Weather APU */
/* ********************** */

// get the delivery weather for a single package, based on tracking #
router.get('/weather/:trackingId', (req, res) => {
  res.send(`<h1>Getting weather data</h1>`);
});



export default router;
