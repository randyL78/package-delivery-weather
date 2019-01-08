// models/package.js

// load dependencies
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// create new instance of the mongoose schema object
// use this to shape the data entries going into the db
const packageSchema = new Schema({
  product       : String,
  trackingNumber: String,
  carrier       : String,
  address       : String,
  city          : String,
  zipcode       : String,
  state         : String
}, {
  timestamps: true
});


export default mongoose.model("Package", packageSchema);
