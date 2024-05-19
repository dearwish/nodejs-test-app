var fs = require('fs');
var path = require('path');
var httpProxy = require('http-proxy');

let key = fs.readFileSync("../../certs/server.key");
let cert = fs.readFileSync("../../certs/server.cert");
httpProxy.createServer({
    target: 'http://localhost:3001',
    secure: true,
    ssl: {
        key,
        cert
    }
}).listen(3000);

console.log('Https proxy is listening on 3000');
