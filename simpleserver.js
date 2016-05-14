// function A(){};
// var A = new A();
// var B = function() {};
// B.prototype.doSomething = 'ffff';
// console.log(B.prototype.doSomething);

var foo = {};
foo.name = "Fff";
foo.haha = "ccc";

console.log(foo.name);

var aa = {
    name : "ffff",
}
aa.haha = "ccccc";

var slot;

var probability = {};

var testFunc = function test(param1, param2)
{
    return param1 * param2;
}

// var fff = new Object();
// console.log(fff.constructor);
// testFunc
// var prob_1 = probability.__proto__;
// var prob_2 = testFunc.__proto__;
// 
// probability.prototype;
// var prob_4 = testFunc.prototype;
// 
// var der = new Aff();
//     
// var info = { name : "아따"};
// var node = {info : "ff"};
// var async = require('async');
// async.waterfall();

var http = require('http'),
    path = require('path'),
    fs = require('fs'),
    base = './home/examples/public_html';
 

http.createServer(function (req, res) {
    var pathname = base + req.url;
    console.log(pathname);
    //fs read는 파일을 사용하기 파일 전체를 메모리로 읽어드려
    //웹 문서는 크기가 클수있다. 그래서 createReadStream
    fs.exists(pathname, function(exist){
        if(exist){
            res.writeHead(404);
            res.write('bad Request 404');
            res.end();
        }
        else{
            doRead(pathname, res);
        }
    })
    }).listen(8124); 
    
function doRead(pathname, res)
{
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    
    //읽기가능 스트림을 생성하고 파이프시킴
    var file = fs.createReadStream(pathname);
    file.on("open", function(){
        console.log(file);
        file.pipe(res);
    });
    file.on("error",function(err){
        console.log(file);
        console.log(err);
    })
}