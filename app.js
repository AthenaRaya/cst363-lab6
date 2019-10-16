

const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public")); 

//adding route. This is the root. 
app.get("/", function(req, res){ 
   
  res.render("index.html");
  
});
app.get("/mercury", function(req, res){
    res.render ("index.mercury");
});

app.get("/venus", function(req, res){
  res.render("index.venus");
});
app.get("/earth",function(req,res){
  res.render("index.earth");
})
app.listen(process.env.PORT,process.env.IP,function(){
  console.log("Running Express Server...")
});