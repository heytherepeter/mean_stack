
const express = require("express");

const app = express();
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 

app.set('view engine', 'ejs');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

const server = app.listen(8000);
const io = require('socket.io')(server);

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

io.on('connection', function (socket) {
  
    socket.emit('greeting', { msg: 'Greetings, from server Node, brought to you by Sockets! -Server' }); //3
    socket.on('thankyou', function (data) {
      console.log(data.msg);
    });

    socket.on('posting_form', function (data) {
        let formdata = {};
        data.data.forEach(function(element, i) {
            // console.log('Element', i, 'is', element);
            formdata[element.name] = element.value;
        });
        console.log(formdata);
      });

});