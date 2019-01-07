/* router for api/ routers */

// load dependencies
import express from 'express';

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
  res.send(`<h1>Getting saved packages from DB</h1>`);
});

// add a new package to the list
router.post('/packages', (req, res) => {
  res.send(`<h1>Adding package to DB</h1>`);
});

// make a change to a package
router.put('/packages/:trackingId', (req, res) => {
  res.send(`<h1>Making a change to package with tracking number: ${req.params.trackingId}</h1>`);
});

// delete a package
router.delete('/packages/:trackingId', (req, res) => {
  res.send(`<h1>Deleting package with tracking number: ${req.params.trackingId}</h1>`);
});


/* routes for Ups API */
/* ****************** */

// get tracking information for a single package using UPS
router.get('/tracking', (req, res) => {
  res.send(`<h1>Getting delivery information</h1>`);
});

/* routes for Weather APU */
/* ********************** */

// get the delivery weather for a single package, based on tracking #
router.get('/weather', (req, res) => {
  res.send(`<h1>Getting weather data</h1>`);
});



export default router;
