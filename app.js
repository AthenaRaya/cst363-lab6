

const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public")); 

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
app.listen(process.env.port,process.env.IP,function(){
  console.log("Running Express Server...")
});