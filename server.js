/**
 * Created by user on 2015-12-11.
 */

var sjCustom = 9;

function plus(a,b)
{
    sjCustom = a+b;
    return sjCustom;
}

var http = require("http");
var url = require("url");

function run(route, handler)
{
    console.log("run");
    var onRequest = function(request, response)
    {
        var pathName = url.parse(request.url).pathname;
        console.log("Request" + pathName + "received");
        route(handler, pathName, response);
    }
    http.createServer(onRequest).listen(8888);
}

exports.run = run;




