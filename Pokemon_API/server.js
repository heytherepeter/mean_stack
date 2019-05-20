const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/pokemon_api')

const PokemonSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'name is required'], minlength: 2}
}, {timestamps: true})

const express = require('express'),
    app = express();

    app.use(express.static(__dirname + '/public/dist/public'));

    app.listen(8000);