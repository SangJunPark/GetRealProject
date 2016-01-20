/**
 * Created by user on 2015-12-10.
 */

var server = require("./server");
var router = require("./router");
var requestHandler = require("./requestHandler");

var handler = {}
handler["/"] = requestHandler.start;
handler["/start"] = requestHandler.start;
handler["/upload"] = requestHandler.upload;

var test = "ffffffffffff";
server.run(router.route, handler);

console.log("haha");

