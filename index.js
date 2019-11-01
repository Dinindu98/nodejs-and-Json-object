var fs = require('fs');
var words = fs.readFileSync('abc.json');
var data = JSON.parse(words);
console.log(data[0].name);

var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/',function(req,res){
    // res.send('this i' + data[1].name + data[1].artist);
    res.render('home',{data:data});
    
});

app.get('/songs/',function(req,res){
    res.send('this is song page');
});

app.get('/songs/:song',function(req,res){
    res.send('this is ' + req.params.song);
});

app.listen(5000);