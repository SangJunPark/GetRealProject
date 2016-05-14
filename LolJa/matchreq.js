
var request = require('request');
var matchUrl = 'https://kr.api.pvp.net/api/lol/kr/v1.4/matchlist/by-summoner/';
var summonerUrl = 'https://kr.api.pvp.net/api/lol/kr/v1.4/summoner/by-name/';
var apiKey ='/?api_key=0995f967-0086-4b7a-8283-2309bbb06999';
var async = require('async');

var match = function(user_name, callback)
{
    request.get(summonerUrl + user_name + apiKey, function (err, res, body)
    {
        var data = JSON.parse(res['body']);
        console.log(data);
        
    } );
//     request.get('https://kr.api.pvp.net/api/lol/kr/v1.4/matchlist/by-summoner/1248595?api_key=0995f967-0086-4b7a-8283-2309bbb06999', 
//     function (err, res, body) {
//         var data = JSON.parse(res['body']);
//         //console.log(data);
//         for(var i = 0; i < data.matches.length; ++ i)
//         {
//             //va = data.matches[i];
//         }
//   
//       if(callback != null)
//         callback(data.matches);
//    });
}

exports.match = match;