var express = require("express");
var app = express();
app.get('/',function(req,res){
    res.writeHeader(200,{'Content-Type':'text/plain'});
    res.end("Hello World");
});
app.listen(process.env.PORT,function(){
    console.log("Server listening at port"+process.argv[2]);
});