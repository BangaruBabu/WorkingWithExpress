var express = require('express');
var app = express();
var port = 3000;

app.get('/name/:username', function(req, res){
    res.status(200);
    res.set('Content-type','text/html');
    res.end('<html><body'+
           '<h1>Hello '+req.params.username+'</h1>'+
           '</body></html>'
           );
});

app.listen(port, function(){
    console.log("The server is running, please open ur browser at http://localhost:%s",port);
});