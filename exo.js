/* var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
}).listen(8080);
 */
/* 

var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    var txt = q.year+ " " + q.month;
    res.end(txt);
}).listen(8080);
 */

v/* ar http = requiere('http');
var fs = require('fs');

http.createServer(function (req, res) {

    res.writeHead(200, {'content-Type': 'text/html'});
    res.write(data);
    return res.end();

}).listen(8080);
 */