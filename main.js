const express = require("express"); 
const fs = require("fs");

const app = express();
//app.set("view engine", "ejs"); 


     //fs.readFile(__dirname + "/index.html", "utf-8", (err, txt) =>{
     //   res.send(txt); 
    //})
    //or


app.use(express.static("public"));
app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/public/index.html"); 
})
 
app.listen(3000, () =>{
    console.log("server active");
    console.log(__dirname); 
}); 


