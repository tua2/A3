const bodyparse=require('body-parser');

var express = require('express');

const methodOverride=require('method-override');
var app=express();

app.use(bodyparse.json({
    limit:'5mb'
}));

app.use(bodyparse.json({
    type:'application/vnd.api+json'
}));

app.use(bodyparse.urlencoded({
    limit:'5mb',
    extended:true
}));

app.use(methodOverride('X-HTTP-Method-Override'));

require('./routes')(app);

let server=require('http').createServer(app);

app.listen(3000, function (){
    console.log('Server app running on port 3000!')
});



/*const http=require("http");
const hostname='127.0.0.1';
const port=3000;

const server=http.createServer((req, res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World Tuan 12');
});

server.listen(port, hostname,()=>{
    console.log('server running at http://' +hostname +':' +port +'/');

});

 */
