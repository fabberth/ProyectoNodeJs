const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const routers = require("./routers/router")

// Settings
app.set("port",process.env.PORT || 3000);
app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");

// Middlewares
app.use((req,res,next) => {
    console.log(req.url+"-"+req.method);
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Routers
app.use(routers);

// Static Files
app.use(express.static('public'));

// Start Server
app.listen(app.get("port"), ()=> {
    console.log('SERVIDOR EJECUTANDOSE EN EL PUERTO:',app.get("port"));
})