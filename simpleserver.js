var http = require('http'),
    path = require('path'),
    fs = require('fs'),
    base = '/home/examples/public_html';
    
    http.createServer(function (req, res) {
        var pathname = base + req.url;
        console.log(pathname);
    }).listen(8124); 