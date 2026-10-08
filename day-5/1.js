const express = require("express");
const app = express();

app.use(express.json());


app.get("/", function(req,res){
    res.send("hello mere bhaii");
})

app.get("/profile", function(req,res){
    res.send("enjoy kr bhaii");
})

app.get("/about", function(req,res){
    res.send("about page");
})


app.listen(3000);
