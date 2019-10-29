

const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public")); 

//adding route. This is the root. 
app.get("/", function(req, res){ 
   
  res.render("index.html");
  
});
app.get("/mercury", function(req, res){
  //  res.send("<h1> Mercury Planet </h1>");
    res.render("mercury.ejs");
});

app.get("/venus", function(req, res){
//  res.send("<h1> Venus Planet </h1>");
  res.render("venus.ejs");
});
app.get("/earth",function(req,res){
//  res.send("<h1> Earth Planet </h1>");
  res.render("earth.ejs");
})
app.get("/saturn",function(req,res){
//  res.send("<h1> Saturn Planet </h1>");
  res.render("saturn.ejs");
})
//app.listen("8081","0.0.0.0",function(){
//  console.log("Express Server is running...");
//});
app.listen(process.env.PORT,process.env.IP,function(){
  console.log("Running Express Server...")
});