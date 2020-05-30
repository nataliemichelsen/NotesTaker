// set path
let path = require("path");

// set exports
module.exports = function (app) {

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// set default
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
};