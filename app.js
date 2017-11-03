// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// populate tables
var tables = [
    {
        routeName: "table1",
        name: "Guest One",
        id: 01
    },
    {
        routeName: "table2",
        name: "Guest Two",
        id: 02
    },
    {
        routeName: "table3",
        name: "Guest Three",
        id: 03
    },
    {
        routeName: "table4",
        name: "Guest Four",
        id: 04
    },
    {
        routeName: "table5",
        name: "Guest Five",
        id: 05
    }
];

//routes

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname,"index.html"));
});


app.get("/table", function(req,res){
    res.sendFile(path.join(__dirname,"table.html"));
});


app.get("/reservation", function(req,res){
    res.sendFile(path.join(__dirname,"reservation.html"));
});

//listen
app.listen(PORT, function () {
    console.log("Listening on port " + PORT);
});