const express = require('express')
const app = express()
var sslRedirect = require('heroku-ssl-redirect')
var compression = require('compression')

var port = process.env.PORT || 8080;

app.use(compression());
app.use(sslRedirect());
app.use(express.static(__dirname + '/'));




app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, () => console.log('Example app listening on port '+port))