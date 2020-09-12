const path = require("path");

module.exports = function(app) {

app.get("/index", function (req, res) {
    res.sendFile(path.join(__dirname, "../htmlFiles/index.html"))
});

app.get("/reservations", function (req, res) {
    res.sendFile(path.join(__dirname, "../htmlFiles/reservations.html"))
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "../htmlFiles/tables.html"))
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../htmlFiles/index.html"))
});

};