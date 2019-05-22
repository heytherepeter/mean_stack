const bodyParser = require('body-parser');
const express = require('express')
const path = require('path')

const app = express()

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist/public'));

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });


app.listen(8000)
