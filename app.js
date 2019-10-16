const express = require("express");
const app = express();

//adding route. This is the root. 
app.get("/", function(req, res){ 
   
  res.render("index.html");
  
});
app.get("/mercury", function(req, res){
    res.send("This will be Mercury web page!");
});

app.get("/venus", function(req, res){
  res.send("This will be Venus web page!");
});
app.listen("8081","0.0.0.0",function(){
  console.log("Express Server is running test...")
});