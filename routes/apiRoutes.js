var tableData = require("../db/tables");
var reservationData = require("../db/reservations");

module.exports = function(app) {

// API Get Requests
app.get("/api/tables", function (req, res) {
    res.json(tableData);    
});
app.get("/api/reservations", function (req, res){
    res.json(reservationData);    
});


// API Post Requests
app.post("/api/tables", function(req, res) {
    if (tableData.length < 5) {
        tableData.push(req.body);
        res.json(true);
    }
    else {
        reservationData.push(req.body);
        res.json(false);
    }
});

// API Clear Requests
app.post("/api/clear", function(req, res) {
    tableData.length = 0;
    reservationData.length = 0;

    res.json({ okay: true});
});

};