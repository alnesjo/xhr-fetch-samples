'use strict';
let http = require('http'),
    fs = require('fs');
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'image/jpeg', 'Transfer-Encoding': 'chunked'});
    fs.createReadStream('./flowers.jpg').pipe(res);
}).listen(8080, 'localhost');