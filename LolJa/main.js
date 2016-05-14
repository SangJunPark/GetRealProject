// const http = require('http');
// const net = require('net');
// const url = require('url');
// 
// // Create an HTTP tunneling proxy
// var proxy = http.createServer( (req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   console.log('lolja - result');
//   console.log(res);
//   res.end('okay');
// });
// proxy.on('connect', (req, cltSocket, head) => {
//   // connect to an origin server
//   var srvUrl = url.parse(`http://${req.url}`);
//   var srvSocket = net.connect(srvUrl.port, srvUrl.hostname, () => {
//     cltSocket.write('HTTP/1.1 200 Connection Established\r\n' +
//                     'Proxy-agent: Node.js-Proxy\r\n' +
//                     '\r\n');
//     srvSocket.write(head);
//     srvSocket.pipe(cltSocket);
//     cltSocket.pipe(srvSocket);
//   });
// });
// 
// // now that proxy is running
// proxy.listen(1337, '127.0.0.1', () => {
// 
//   // make a request to a tunneling proxy
//   var options = {
//     port: 1337,
//     hostname: '127.0.0.1',
//     method: 'CONNECT',
//     path: 'www.naver.com:80'
//   };
// 
//   var req = http.request(options);
//   req.end();
// 
//   req.on('connect', (res, socket, head) => {
//     console.log('got connected!');
// 
//     // make a request over an HTTP tunnel
//     socket.write('GET / HTTP/1.1\r\n' +
//                  'Host: www.google.com:80\r\n' +
//                  'Connection: close\r\n' +
//                   '\r\n');
//     socket.on('data', (chunk) => {
//       //console.log(chunk.toString());
//     });
//     socket.on('end', () => {
//       proxy.close();
//     });
//   });
// }) 


var express = require("express");
var app     = express();
var path    = require("path");
var bodyParser = require('body-parser');

var match = require('./matchreq');
var app     = express();

//Note that in version 4 of express, express.bodyParser() was
//deprecated in favor of a separate 'body-parser' module.
app.use(bodyParser.urlencoded({ extended: true })); 
//app.use(express.bodyParser());

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname + '/html/test.html'));
});

app.get('/user',function(req, res){
    app.redirect('/user');
    
});

app.post('/user', function (req, res) {
    //match.match(req.body['user_name']);
    app.redirect('/user');
});

app.listen(8888);

console.log("Running at Port 3000");