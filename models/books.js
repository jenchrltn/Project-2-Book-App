const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema ({
   title: { 
   type: String,
   required: true 
  },
   author: {
   type: String, 
   required: true 
  }, 
   date: {
   type: String, 
   required: true
 },
  comment: String,
  rating: {type: Stars, min:1, max:5, default:5}
});


module.exports = mongoose.model('Book',bookSchema);

