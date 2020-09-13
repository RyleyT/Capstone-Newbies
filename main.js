const express = require('express'),
path = require('path'),
router = require('./router')

let app = express();

app.set('views', (path.join(__dirname, 'views')));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('port', process.env.PORT || 8080);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router);
app.use('/index', router);
app.use('/about', router);
app.use('/tracker', router);

app.listen(app.get('port'), function () {
    console.log(`Server has started and is running on http://localhost:${app.get('port')}`);
});

// const port = 3000,
// http = require("http"),
// httpStatus = require("http-status-codes")

// app = http.createServer();

// const routeMap = { //some basic mapping of routes, can be expanded into a router class later.
//     "/": "<h1>Hello Universe!</h1>",
//     "/about": "<h1>This is a page that talks about our app</h1>",
//     "/error": "<h1>This page does not exist!</h1>"
// };

// app.on("request", (req,res) => { //Listen for requests
//     res.writeHead(200, {
//         "Content_Type": text/html
//     });

//     if(routeMap[req.url]) {
//         res.end(routeMap[req.url]);
//     } else {
//         res.end("<h1>Welcome!</h1>")
//     }
// });

// app.listen(port)
// console.log(`The server has started and is listening on port number: ${port}`);