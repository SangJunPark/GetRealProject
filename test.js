var v = 10;
var async = require('async');
var http = require('http');
var fs = require('fs');

//var gulp = require('gulp');


//console.log(v);

// async.waterfall([
//   function(callback){
//     callback(null, '하나', '둘', '셋');
//   },
//   function(arg1, arg2, arg3, callback){
//     // arg1는 '하나'고, arg2는 '둘'이다.
//     console.log(arg3);
//     callback(null, '셋');
//   },
//   function(arg1, callback){
//     // arg1은 '셋'이다.
//     var route = 10;
//     callback(null, '끝', route);
//   }
// ], function (err, result, route) {
//    // result에는 '끝'이 담겨 온다.
//    console.log(result, route);
// });


// var step = require('step');
// try{
//     var temp = step(
//         function one() // 이 함수도 비동기 함수인가?
//         {
//             //console.info(this);
//             console.log("aa");
//             this("Aa","aa");
//             this("FF","AAA","FFF");
//             this("FF","bbb","FFF");
//             fs.readFile('./data/data.txt', 'utf8', this);
//         },
//         function two(err, text, wtf)
//         {
//             console.log(text);
//             //console.log(this);
//             //if(err) throw err;
//             //return text.replace(/somecompany\.com/g, 'burningbird.net');
//         },
//         function three(err, text)
//         {
//             console.log(text);
//             //console.log(this);
//             //if(err) throw err;
//             //fs.writeFile('./data/data.txt', text, this);  
//         },
//         function four(err, text)
//         {
//             console.log(text);
//             //console.log(this);
//             //if(err) throw err;
//             //fs.writeFile('./data/data.txt', text, this);
//             return "ffff";
//         }
//     )
//     
//     console.log(temp);
// }
// catch(err)
// {
//     console.error(err);
// }

////waterfall
// try{
//     async.waterfall([
//     function readData(callback)
//     {
//         console.log(callback);
//         
//         fs.readFile('./data/dat1a.txt', 'utf8', function(err, data){
//             callback(err, data); 
//         });
//     },
//     function modify(text, callback)
//     {
//         var adjdata = "haha";
//         callback(null, adjdata);
//     },
//     function writeData(text, callback)
//     {
//         fs.writeFile('./data/data.txt', text, function(err, data)
//         {
//             callback(err, text);
//         })
//     }
//     ], 
//         function (err, result)
//         {
//             if(err) throw err;
//             console.log(result);
//         }
//     );
//     
//     console.log("In Progress");
// }
// catch(err)
// {
//     console.log(err);
// }

//parallel
try{
    async.parallel({
        data1 : function (callback) {
            fs.readFile('./data/data.txt', 'utf8', function(err, data){
                callback(err,data);
                                
            });
        },
        data2 : function(callback){
            fs.readFile('./data/data.txt', 'utf8', function(err,data){
               callback(err,data); 
            });
        },
        data3 : function(callback){
            fs.readFile('.data/data2.txt', 'utf8', function(err, data) {
                callback(err,data);
            })
        },
    },
    function(err,result){
        if(err) throw err;
        console.log(result);
    });
    
    console.log("asdfasdf");
}
catch(err)
{
    console.error(err);
}


var obj = function(){}
obj.prototype.doSomething = function(arg1, arg2_)
{
    var arg2 = typeof(arg2_) === 'string' ? arg2_ : null;

    var callback_ = arguments[arguments.length - 1];
    callback = (typeof(callback_) == 'function' ? callback_ : null);

    if(!arg2)
        return callback(new Error('second argument missing or not a string'));

    callback(arg1);
}

var test = new obj();

try{
    test.doSomething('test', 3.55, function(err, value) {
        if(err) throw err;
        console.log(value);
    });
}catch(err)
{
    console.error(err);
}

