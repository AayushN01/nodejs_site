const http = require('http');
const url = require('url');
const fs = require('fs');
const host = '127.0.0.1';
const port = 3000;

http.createServer(function(request, response){
    var pathname = url.parse(request.url).pathname;
    console.log(`Request for ${pathname} received`);
 
    if(pathname ==='/')
    {
        fs.readFile('index.html', function(err, data){
            if(err)
            {
                response.statusCode = 404;
                response.writeHead(404, {'Content-Type':'text/html'});
                response.write('404 Not Found');
            }else{
                response.statusCode = 200;
                response.writeHead(200, {'Content-Type':'text/html'});
                response.write(data);
            }
            response.end();
        });
    }else if(pathname === '/about'){
        fs.readFile('about.html', function(err, data){
            if(err)
            {
                response.statusCode = 404;
                response.writeHead(404, {'Content-Type':'text/html'});
                response.write('404 Not Found');
            }else{
                response.statusCode = 200;
                response.writeHead(200, {'Content-Type':'text/html'});
                response.write(data);
            }
            response.end();
        });
    }else{
        response.statusCode = 404;
        response.writeHead(404, {'Content-Type':'text/html'});
        response.write('404 Not Found');
    }
}).listen(port);

console.log(`Server is running at http://${host}:${port}/`);