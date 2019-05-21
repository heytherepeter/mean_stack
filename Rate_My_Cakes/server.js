const bodyParser = require('body-parser');
const express = require('express')

const app = express()

app.use(bodyParser.json());

require('./config/routes.js')(app)

app.use(express.static(__dirname + '/public/dist/public'));

app.listen(8000)