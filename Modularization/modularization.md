# Modularize

## Require and Export
```javascript
const mongoose = require('mongoose'),
      Quote = mongoose.model('Quote')
module.exports = function(app){
    app.get('/', function (req, res) {
       Quote.find({}, function (err, data){
            ...
       })
    })
       // all other routes
}        
```
```javascript
// where the routes used to be, we're going to require routes.js
// since routes.js exports a function, server.js will receive that function
// invoke the function we get from the require and pass it app as an argument
    require('./server/config/routes.js')(app)
```
## Folder structure
```javascript
// project
// |-> client
// |  |-> static
// |  |-> views
// |-> node_modules
// |-> server
//     |-> config
        //routes.js
        app.get('/', function(req, res){
                quotes.index(req, res);
        })
//     |-> controllers
        // qoutes.js
        require('./server/config/routes.js')(app)
        module.exports = {
            index: function(req, res) {
                // code...
            },
            create: function(req, res) {
                // code...
            },
            destroy: function(req, res) {
                // code...
            }
        };


//     |-> models
//     |-> package.json
//     |-> server.js
```
