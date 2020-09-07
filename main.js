const port = 3000,
http = require("http"),
httpStatus = require("http-status-codes")

app = http.createServer();

const routeMap = { //some basic mapping of routes, can be expanded into a router class later.
    "/": "<h1>Hello Universe!</h1>",
    "/about": "<h1>This is a page that talks about our app</h1>",
    "/error": "<h1>This page does not exist!</h1>"
};

app.on("request", (req,res) => { //Listen for requests
    res.writeHead(200, {
        "Content_Type": text/html
    });

    if(routeMap[req.url]) {
        res.end(routeMap[req.url]);
    } else {
        res.end("<h1>Welcome!</h1>")
    }
});

app.listen(port)
console.log(`The server has started and is listening on port number: ${port}`);