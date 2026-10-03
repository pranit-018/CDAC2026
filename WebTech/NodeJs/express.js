const exprees = require("express");
const path = require('path');
const app = exprees();

const imgPath =  path.join(__dirname,"/public");

//use of express.static middleware
app.use(exprees.static(imgPath));



app.get("/", (req, res, next) => {
//   res.send("simple get request");
res.sendFile(__dirname+"/Home.html");
});

app.get("/home", (req, res, next) => {
 res.sendFile(__dirname+"/Home.html");
});

app.get("/about", (req, res, next) => {
  res.sendFile(__dirname+"/about.html");
});

app.get("/contact", (req, res, next) => {
  res.sendFile(__dirname+"/contact.html");
});

app.get("/gallery", (req, res, next) => {
  res.sendFile(__dirname+"/gallery.html");
});

app.get("/service", (req, res, next) => {
  res.sendFile(__dirname+"/service.html");
});

app.listen(5050, () => {
  console.log("server get started");
});