/**
 * Created by user on 2015-12-15.
 */
var exec = require("child_process").exec;
function start(response)
{
    console.log("request handler - start");
    //var content = "hey boy";
    exec("ls -lah", //{ timeout : 100, maxBuffer: 20000*1024}, 
    function(error, stdout, stderr){
       response.writeHead(200, {"Content-Type" : "text/plain"});
        function sleep(milliSeconds) {
            var startTime = new Date().getTime();
            while (new Date().getTime() < startTime + milliSeconds);
        }
       sleep(10000);
       console.log("sdfsdfasdfasd");
       response.write(stdout);
       response.end();
    });
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
    //     '</html>';
    // response.writeHead(200, {"Content-Type" : "text/html"});
    // response.write(body);
    // response.end();
}

function upload(response)
{
    console.log("request handelr - upload");
    response.writeHead(200,{"Content-tYPE" : "text/plain"});
    response.write("Hello Upload");
    response.end();
    //return "Hello Upload";
}

exports.start = start;
exports.upload = upload;