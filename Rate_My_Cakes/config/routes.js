const Cake = require('../controllers/cakes.js');

module.exports = function(app) {
    app.get('/cakes', (req, res) => {
        Cake.findAll(req, res);
    })
    app.post('/cakes', (req, res) => {
        Cake.create(req, res);
    })
    app.get('/cakes/:id', (req, res) => {
        Cake.findOne(req, res);
    })
    app.put('/cakes/:id', (req, res) => {
        Cake.update(req, res);
    })
    app.delete('/cakes/:id', (req, res) => {
        Cake.delete(req, res);
    })

}
