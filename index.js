var http = require('http');
var fs = require('fs');
http.createServer(function (req,res){
    res.writeHead(200,{'content':'text/html'});
    fs.appendFile('index.html',"<span style='font-size: 300px;'>fuddi da</span>",function(err){
        if (err) throw err;
        console.log('Saved!');
    });
    fs.readFile('index.html',function (err,data){
        res.write(data);
        res.end();
    });
}).listen(8080);