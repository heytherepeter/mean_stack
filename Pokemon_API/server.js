const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/pokemon_api')

const PokemonSchema = new mongoose.Schema({
    pokenum: { type: Number, required: [true, 'num is required']}
}, {timestamps: true})
mongoose.model('Poke', PokemonSchema);
const poke = mongoose.model('Poke');


mongoose.Promise = global.Promise;

const express = require('express'),
    app = express();
    var bodyParser = require('body-parser');
    // Integrate body-parser with our App
    app.use(bodyParser.json());
    
    app.use(express.static(__dirname + '/public/dist/public'));

    app.post('/poke', (req, res) => {
        console.log('received request', req.body)
        var newpoke = new poke(req.body)
        newpoke.save( err => {
            if(err){
                console.log(err);
                res.json(err);
            } else {
                res.json(newpoke);
            }
        })
    } )

    app.listen(8000);