const express = require('express'),
router = express.Router(),
mongoose = require('mongoose'),
userController = require('./controllers/userController'),
dataController = require('./controllers/dataController')

//Database connection
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://ryleyt:1qaz@cluster0.h0wyn.mongodb.net/CapstoneNewbies?retryWrites=true&w=majority", {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.Promise = global.Promise;

//Home page
router.get('/', (req,res) => {
    res.render('index.html');
})

//Index
router.get('/index', (req,res) => {
    res.render('index.html');
})

//About page
router.get('/about', (req, res) => {
    res.render('about.html')
})

//Tracker page
router.get('/tracker', dataController.index);

//Register page
router.get('/register', (req, res) => {
    res.render('register.html');
})
router.post('/register', userController.create, userController.redirectView)

//Users page
router.get('/users', userController.index);
router.delete('/users/:id/delete', userController.delete, userController.redirectView);


module.exports = router;