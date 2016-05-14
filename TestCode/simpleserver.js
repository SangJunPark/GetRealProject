var http = require('http');
var express = require('express');
var app = express();

app.use(express.urlencoded());

function authUser(req, res, next)
{
    var user = {
        name : 'Jun',
        admin: true
    };
    req.user = user; 
    next();
}

app.use(authUser);

app.get('/', function(req, res) {
//    res.send("<html><body><h1>Express</h1?</body></html>");
//    res.end();
    res.send({
        foo : 'bar'
    });
});

app.post('/doStuff', function(req, res) {
    var param = req.param('foo');
    
    res.send({
        foo : param
    })
})

var server = http.createServer(app);

server.listen(3000);