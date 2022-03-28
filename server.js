const express = require("express")
const app = express();
const mustache = require('mustache-express');




app.engine('mustache', mustache());

app.set('view engine', 'mustache')

app.get("/", function(req, res) {
    console.log("go")
    res.render("index");
})

app.listen(8080, () =>{
  console.log("gooom")
})