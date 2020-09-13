const express = require('express'),
router = express.Router()

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
router.get('/tracker', (req, res) => {
    res.render('tracker.html');
})

module.exports = router;