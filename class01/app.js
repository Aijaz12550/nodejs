const app = require("express")();
const { json } = require("body-parser");
const dbConnection = require("./config/mongodb")
const { signup } = require("./controllers")

require("dotenv").config();

let PORT = process.env.PORT || 4500;

app.use(json());


// mongodb
dbConnection();

app.post("/signup",signup);

let cb = () => console.log(PORT);
app.listen(PORT, cb);
