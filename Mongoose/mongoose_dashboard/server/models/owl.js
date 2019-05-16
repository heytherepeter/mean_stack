const mongoose = require("mongoose");

const OwlSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'name required'], minlength: 2},
    age: { type: Number, required: [true, 'age required'], min: 1, max: 150 }
}, {timestamps: true });
mongoose.model('Owl', OwlSchema);