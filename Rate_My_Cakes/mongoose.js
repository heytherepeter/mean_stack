
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rate_my_cakes');
var CakeSchema = new mongoose.Schema({
    baker: { type: String, required: true },
    image: { type: String, required: true }
   }, {timestamps: true })
mongoose.model('Cake', CakeSchema);
mongoose.Promise = global.Promise;

module.exports = mongoose;