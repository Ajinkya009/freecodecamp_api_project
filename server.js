var express = require("express");
var moment = require("moment");
var path = require("path");
var morgan = require("morgan");
var app = express();
app.use(morgan('dev'));
app.use(express.static(path.resolve(__dirname,'front_end')));

app.get('/:timestring',function(req,res){
    
    if(moment(req.params.timestring,'MMMM DD, YYYY',true).isValid()){
        var value = moment(req.params.timestring,'MMMM DD, YYYY');
        res.json({
      unix: value.format("X"),
      natural: value.format("MMM DD, YYYY")
    });
    }
    else if(moment(req.params.timestring,'X',true).isValid()){
       var value = moment(req.params.timestring,'X');
        res.json({
      unix: value.format("X"),
      natural: value.format("MMM DD, YYYY")
    });
    }
    else{
        res.json({
      unix: null,
      natural: null
    });
    }
    
});

app.listen(process.env.PORT,function(){
    console.log("Server listening at port:"+process.env.PORT);
});