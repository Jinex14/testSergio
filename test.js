var http = require("http");

var count = 0;

var server = http.createServer(
    (req, res) => {
        console.log("Hit!");
        res.statusCode = 200;
        res.setHeader("content-Type", "text/plain");
        count++;
        res.end("Count: " + count.toString());
    }
);

server.listen(process.env.PORT || 5555);