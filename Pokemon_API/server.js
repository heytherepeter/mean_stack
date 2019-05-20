const express = require('express'),
    app = express();

    app.use(express.static(__dirname + '/public/dist/public'));

    app.listen(8000);