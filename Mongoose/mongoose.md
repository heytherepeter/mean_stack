# Mongoose

install
make a package.json file:
```
npm init -y
npm install express --save
npm install ejs --save
npm install body-parser --save
npm install mongoose --save

```
Connect to mongoose
```javascript
var mongoose = require('mongoose');

// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/basic_mongoose');

var UserSchema = new mongoose.Schema({
    name: String,
    age: Number
   })
   mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
   var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'
   
// Use native promises (only necessary with mongoose versions <= 4)
mongoose.Promise = global.Promise;
```

Routes
```javascript
// Routes
// Root Request
app.get('/', function(req, res) {
  User.find({}, function(err, users) {
    if(err){res.render('index', {error: err});} 
    else {res.render('index', {users: users});}
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
  })
});
// Add User Request 
app.post('/users', function(req, res) {
    console.log("POST DATA", req.body);
    // create a new User with the name and age corresponding to those from req.body
    var user = new User({name: req.body.formName, age: req.body.formAge});
    // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.copy
    user.save(function(err) {
      // if there is an error console.log that something went wrong!
      if(err) {console.log('something went wrong');
      } else {console.log('successfully added a user!');
          // else console.log that we did well and then redirect to the root route
      }res.redirect('/');
    })
})
```