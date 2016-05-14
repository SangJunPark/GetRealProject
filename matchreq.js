
var request = require('request');
var match = function(callback)
{
    request.get('https://kr.api.pvp.net/api/lol/kr/v1.4/matchlist/by-summoner/1248595?api_key=0995f967-0086-4b7a-8283-2309bbb06999', 
    function (err, res, body) {
  //console.log(r.uri.href);
  //console.log(res.request.uri.href);
  //console.log(res);
  
  var data = JSON.parse(res['body']);
  //console.log(data);
  for(var i = 0; i < data.matches.length; ++ i)
  {
      //va = data.matches[i];
  }
  
  if(callback != null)
    callback(data.matches);

  // Mikael doesn't mention getting the uri using 'this' so maybe it's best to avoid it
  // please add a comment if you know why this might be bad
  //console.log(this.uri.href);
});
}

exports.match = match;