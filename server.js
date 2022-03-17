var express = require("express");

var app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/user/:id", (req, res) => {

    var dummyData = {
        "id": req.params["id"],
        "username": "Sergiosoba",
        "level": 5
    }

    // JSON
    res.json(dummyData);
    //res.send(dummyData.username);
})

app.listen(process.env.PORT || 5555, () => {
    console.log("Server has started!");
});