const bodyParser = require('body-parser');
const express = require('express')

const app = express()

app.use(bodyParser.json());

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });

app.use(express.static(__dirname + '/public/dist/public'));

app.listen(8000)
