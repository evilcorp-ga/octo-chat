const express  = require('express');
const loader   = require('require-dir');
const parser   = require('body-parser');
const mongoose = require('mongoose');

var app = express();
app.set('view engine', 'pug');
app.use(parser.urlencoded({ extended: false }));

var routes = loader('../routes');
Object.keys(routes).forEach((route)=>{
    app.use("/"+route, routes[route]);
});

app.get("/",(req,res)=>{
    res.render('index',{});
});

app.listen(3000,() => {
    console.log("Http server started");
});
