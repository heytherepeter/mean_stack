
var express = require("express");

var app = express();
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 

app.set('view engine', 'ejs');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (request, response) => {
    response.render('index');
});

app.post("/result", (request, response) => {
    console.log(request.body);
    let data = {
        name: request.body.name,
        location: request.body.location,
        comment: request.body.comment
    }
    response.render('results', {data});
});

app.listen(8000, function() {
    console.log("listening on port 8000");
});