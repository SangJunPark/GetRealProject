/**
 * Created by user on 2015-12-15.
 */

function route(handler, pathName, response)
{
    console.log("About to route a request for " + pathName);
    if(typeof(handler[pathName]) === 'function'){
        handler[pathName](response);
    }
    else {
        console.log("No Request - " + pathName);
        response.writeHead(200, {"Content-Type" : "text/plain"});
        response.write("404 Not Found");
        //response.write(plus(39,30).toString());
        response.end();
    }
}

exports.route = route;
