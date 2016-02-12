// var connect = require('connect');
// var morgan = require('morgan');
// var http = require('http');
// var favicon = require('serve-favicon');
// var fs = require('fs');
// var cookieParser = require('cookie-parser');
// 
// var writeStream = fs.createWriteStream('./log.txt',{
//     'flags' : 'a',
//     'encoding' : 'utf8',

//     'mode' : 0666
// });
// 
// var app = connect();
// app.use(favicon(__dirname + '/ico.png'));
// app.use(morgan('dev', {stream : writeStream}));
// app.use(cookieParser());
// 
// //app.use(favicon());
// app.use(function(req, res, next){
//     res.end('tracking ' + req.cookies.username);
//     next();
// });
// 
// http.createServer(app).listen(8124);

var connect = require('connect');
var morgan = require('morgan');
var favicon = require('serve-favicon');

var app = connect();

var http = require('http'),
    httpProxy = require('http-proxy');

app.use(favicon(__dirname + '/ico.png'));
app.use(morgan('combined'));
app.use(function(req, res, next) {
    res.writeHead(200, { 'Content-Type' : 'text/plain'});
    res.write('request successfully proxied!' + '\n' + JSON.stringify(req.headers, true, 2));
    res.end();
});
    
httpProxy.createServer(8124, 'localhost').listen(8000);

http.createServer(function(req, res){
    res.writeHead(200, { 'Content-Type' : 'text/plain'});
    res.write('request successfully proxied!' + '\n' + JSON.stringify(req.headers, true, 2));
    res.end();
}).listen(8124);