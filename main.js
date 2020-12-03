const express = require('express'),
path = require('path'),
router = require('./router'),
User = require('./models/user'),
layouts = require('express-ejs-layouts'),
methodOverride = require('method-override');

let app = express();

//Configure our app
app.use(methodOverride("_method", { methods: ["POST", "GET"] }));
app.set('views', (path.join(__dirname, 'views')));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('port', process.env.PORT || 8080);
app.use(express.static(path.join(__dirname, 'public')));
app.use(layouts);
app.use(express.urlencoded({
    extended: false
})
);
app.use(express.json());

//Middleware to pass local variables to views
app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    //res.locals.states = req.states;
    //console.log(res.locals.currentUser);
    next();
});

//Routes we will use
app.use('/', router);
app.use('/index', router);
app.use('/about', router);
app.use('/tracker', router);
app.use('/register', router);
app.use('/users', router);

//Start the server
app.listen(app.get('port'), function () {
    console.log(`Server has started and is running on http://localhost:${app.get('port')}`);
});