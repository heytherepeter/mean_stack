# intro

## Uses
- sockets
- V8 engine
- drawback
    + Heavy CPU
    + Inefficient queries can block event loop
    + Batteries not included

## NPM
Node Package Manager
### installing packages
> $ npm install -g nodemon //(-g is global)

## FS and HTTP

route route
```javascript
if(request.url === '/') {
    fs.readFile('index.html', 'utf8', function (errors, contents){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(contents); 
        response.end();
    });
}
```

