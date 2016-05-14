/**
 * Created by user on 2015-12-10.
 */

var server = require("./server");
var router = require("./router");
var requestHandler = require("./requestHandler");

var handler = {}
handler["/"] = requestHandler.upload;
handler["/champ/type"] = requestHandler.req_match;
handler["/upload"] = requestHandler.upload;

var test = "ffffffffffff";
server.run(router.route, handler);


var connect = require('connect');
var event = require('event');

