
## Express
- GET is used for passing insensitive information 
- POST is used for passing sensitive information. 

Basic Server
```javascript
// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
console.log("Let's find out what express is", express);
// invoke express and store the result in the variable app
var app = express();
console.log("Let's find out what app is", app);
// use app's get method and pass it the base route '/' and a callback
app.get('/', function(request, response) {
    // just for fun, take a look at the request and response objects
   console.log("The request object", request);
   console.log("The response object", response);
   // use the response object's .send() method to respond with an h1
   response.send("<h1>Hello Express</h1>");
})
// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
  console.log("listening on port 8000");
})
```

```javascript
// root route
app.get('/', function (req, res){
  res.render('index', {title: "my Express project"});
});
// route to process new user form data:
app.post('/users', function (req, res){
    console.log("POST DATA \n\n", req.body)
  // code to add user to db goes here!
  // redirect the user back to the root route. 
  // All we do is specify the URL we want to go to:
  res.redirect('/');
})
```

URL Varibles 
```javascript
app.get("/users/:id", function (req, res){
    console.log("The user id requested is:", req.params.id);
    // just to illustrate that req.params is usable here:
    res.send("You requested the user with id: " + req.params.id);
    // code to get user from db goes here, etc...
});
```
### Session
```javascript
// new code:
var session = require('express-session');
// original code:
var app = express();
// more new code:
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
```
app.js
```javascript
app.post('/users', function (req, res){
    // set the name property of session.  
    req.session.name = req.body.name;
    console.log(req.session.name);
    //code to add user to db goes here!
    // redirect the user back to the root route. 
    res.redirect('/');
});


```

## Project setup
> npm init -y

```bash
npm install express --save
npm install ejs --save
npm install body-parser --save
```

To use an existing `package.json` file use command `$npm install`

## AJAX and CORS
Client side using AXIOS route `/people`
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
 <script>
    $(document).ready(function(){
        $('#peopleBtn').click(function(){
            // let's make the request to our OWN server!
            $.get('/people', function(data){
                // log the data to be sure we have it before we dive into manipulating the DOMcopy
                console.log("got the data", data);
            }, 'json');
        });
    });
</script>
<body>
    <button id="peopleBtn">People</button>
</b
```

Server side AXIOS promise 
```javascript
... other server code
const axios = require('axios');
app.get('/people', function(req, res){
    // use the axios .get() method - provide a url and chain the .then() and .catch() methods
    axios.get(url)
    .then(data => {
        // log the data before moving on! 
        console.log(data);
        // rather than rendering, just send back the json data!
        res.json(data);
    })
    .catch(error => {
        // log the error before moving on!
        console.log(error);
        res.json(error);
    })
});
```

Anonymous function
```javascript
// es5 style
var anonES5 = function(parameter){                      
    return parameter + 5;                                               
}
// arrow functions
const anonES6 = parameter => parameter + 5;  
// curly brackets are not required if there is only one expression
// parentheses are not required if there is only one parameter
// the return is implicit with just one line
const twoParams = (parameter1, parameter2) => {   
    parameter1 += 5;                  
    return parameter1 + parameter2;               
} 
// with more parameters, parentheses are required  
// with more lines of code, curly brackets are required    
```

# Stocket.io
setup
```
npm init
npm install --save express
npm install --save socket.io
nodemon server.js
```
server side
```javascript
const express = require('express');
const app = express();
app.use(express.static(__dirname + "/public"));
const server = app.listen(1337);
const io = require('socket.io')(server);
var counter = 0;
    
io.on('connection', function (socket) { //2
  
  socket.emit('greeting', { msg: 'Greetings, from server Node, brought to you by Sockets! -Server' }); //3
  socket.on('thankyou', function (data) { //7
    console.log(data.msg); //8 (note: this log will be on your server's terminal)
  });
    
});
```
client side
```javascript
<html>
<head>
    <title>Sockets</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script type="text/javascript" src="/socket.io/socket.io.js"></script>
    <script type ="text/javascript">
        $(document).ready(function (){
    
            var socket = io(); //1
    
            socket.on('greeting', function (data) { //4
                console.log(data.msg); //5
                socket.emit('thankyou', { msg: 'Thank you for connecting me! -Client' }); //6
            });
         })
    </script>
</head>
<body>
    <h1>Fun with sockets</h1>  
</body>
</html>
```

