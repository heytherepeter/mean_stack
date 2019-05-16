const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restful_api');
var TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, default: '' },
    completed: {type: Boolean, default: false}
   }, {timestamps: true })
mongoose.model('Task', TaskSchema);
mongoose.Promise = global.Promise;

module.exports = mongoose;