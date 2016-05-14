    /**
 * Created by user on 2015-12-15.
 */
// var obj = {};
// obj.rootType = "object";
// 
// var func = function() { };
// 
// func.a = 10;
// func.b = 11;
// 
// func.prototype = obj.__proto__;
// console.log(func.rootType);
// 
// console.log(func);
// 
// var exec = require("child_process").exec;
var matchreq = require("./matchreq");
var fs = require('fs');
var express = require('express');
var app = express();

function Req_Match(response)
{
    console.log("request handler - start");
    // var body = '<html>'+
    //     '<head>'+
    //     '<meta http-equiv="Content-Type" content="text/html; '+
    //     'charset=UTF-8" />'+
    //     '</head>'+
    //     '<body>'+
    //     '<form action="/upload" method=' +
    //     '"post">'+
    //     '<textarea name="text" rows="20" cols="60"></textarea>'+
    //     '<input type="submit" value="하이" />'+
    //     '</form>'+
    //     '</body>'+
    //     '</html>'
    
    var _base = __dirname + "\\" + "html\test.html";
   
    p.sendFile(_base);          
    //response.writeHead(200, {"Content-Type" : "text/html"});
    //response.write(body);
    
    // matchreq.match( function(data) {
    //    var result = "";
    //    for(var i = 0; i < data.length; ++ i)
    //    {
    //         result += data[i]['champion'] + ':' + data[i]['lane'] + '\n'; 
    //    }
    //    response.write(result);
    //    response.end(); 
    // });
}

function upload(response)
{
    console.log("request handelr - upload");
    response.writeHead(200,{"Content-tYPE" : "text/plain"});
    response.write("Hello Upload");
    response.end();
    //return "Hello Upload";
}

exports.req_match = Req_Match;
exports.upload = upload;