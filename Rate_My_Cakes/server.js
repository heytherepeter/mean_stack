const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/rate_my_cakes')

const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('hello world'))

app.listen(8000)
