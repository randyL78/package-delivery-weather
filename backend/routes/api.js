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
router.get('/packages', (req, res) => {
  res.send(`<h1>Getting saved packages from DB</h1>`);
});

/* routes for Ups API */
router.get('/tracking', (req, res) => {
  res.send(`<h1>Getting delivery information</h1>`);
});

/* routes for Weather APU */
router.get('/weather', (req, res) => {
  res.send(`<h1>Getting weather data</h1>`);
});



export default router;
