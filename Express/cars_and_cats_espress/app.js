
var express = require("express");

var app = express();
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 

app.set('view engine', 'ejs');

app.get('/', function(request, response) {
   response.send("<h1>Hello Express</h1>");
})

app.get("/cars", function (request, response){
    response.render('cars', {users: users_array});
})

app.get("/cats", function (request, response){
    response.render('cats');
})


app.listen(8000, function() {
  console.log("listening on port 8000");
})

/*
// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/cars') {
        fs.readFile('views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/cats") {
         fs.readFile('views/cats.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }
    else if (request.url === "/cars/new") {
        fs.readFile('views/newCar.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if(request.url === '/img/car1.jpeg'){
        // notice we won't include the utf8 encoding
        fs.readFile('img/car1.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/img/car2.jpeg'){
        // notice we won't include the utf8 encoding
        fs.readFile('img/car2.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/img/car3.jpeg'){
        // notice we won't include the utf8 encoding
        fs.readFile('img/car3.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/img/car4.jpeg'){
        // notice we won't include the utf8 encoding
        fs.readFile('img/car4.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/img/cat1.jpeg'){
        // notice we won't include the utf8 encoding
        fs.readFile('img/cat1.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/img/cat2.jpeg'){
        // notice we won't include the utf8 encoding
        fs.readFile('img/cat2.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/img/cat3.jpeg'){
        // notice we won't include the utf8 encoding
        fs.readFile('img/cat3.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/img/cat4.jpeg'){
        // notice we won't include the utf8 encoding
        fs.readFile('img/cat4.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    // request didn't match anything:
    else {
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");
*/