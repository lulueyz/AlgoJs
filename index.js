var http = require('http');

const { hasUncaughtExceptionCaptureCallback } = require('process');
const data = require('./users.json');
const string = JSON.stringify(data);
console.log(data);

http.createServer(function (req, res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write("Welcome " + string[0]);
    res.end();
}).listen(3030);
