/** 
 *  index.js
 *  @description main entry for package delivery weather app
 *  @author Randy Layne
 */

// load dependencies
import express from 'express';
import morgan from 'morgan';


// initialize express
const app = express();

const router = express.Router();

// parse incoming request body into JSON
app.use(express.json());

// set the backend server port
app.set('port', process.env.PORT || 3001);

// use morgan for better console logging while in dev mode
app.use(morgan('dev'));

// create base route for backend
app.use('/api', router);

// response message at base route to ensure everything is working
router.get('/', (req, res) => {
  res.send(`<h1>You have reached the server API for the package weather app</h1>`)
});

// start listening on our port
const server = app.listen(app.get('port'), () => {
  console.log(`App listening on port ${server.address().port}`);
});

