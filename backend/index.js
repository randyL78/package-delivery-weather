/** 
 *  index.js
 *  @description main entry for package delivery weather app
 *  @author Randy Layne
 */

// load dependencies
import express from 'express';
import morgan from 'morgan';

// load custom modules
import api from './routes/api';


// initialize express
const app = express();

// parse incoming request body into JSON
app.use(express.json());

// set the backend server port
app.set('port', process.env.PORT || 3001);

// use morgan for better console logging while in development mode
app.use(morgan('dev'));

// create base route for backend
app.use('/api', api);

// main 404 route
app.use((req, res) => {
  res
    .status(404)
    .json({success: false, error: "Route not found"});
})

// global error handler
app.use((err, req, res, next) => {
  // log error info to server console
  console.error(err.stack);

  // send error details back to client
  res
    .status(err.status || 500)
    .json({
      success: false,
      error: err.message
    });

});

// start listening on our port
const server = app.listen(app.get('port'), () => {
  console.log(`App listening on port ${server.address().port}`);
});

