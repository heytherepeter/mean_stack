const owls = require("../controllers/owls.js");

module.exports = function(app){

    app.get('/', (req, res) => {
        owls.index(req, res);
    })
    app.get('/owls/:id', (req, res) => {
        owls.owlInfo(req, res);
    })
    
    app.get('/owls/:id/edit', (req, res) => {
        owls.owlEdit(req, res);
    })
    
    app.post('/owls/:id/update', (req, res) => {
        owls.update(req, res);
    })
    
    app.get('/owls/new', (req, res) => {
        res.render('newOwl');
    })
    
    app.post('/owls/create', (req, res) => {
        owls.create(req, res);
    })
 // all other routes
}    
