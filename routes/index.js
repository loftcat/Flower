var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../app', 'index.html'));
});
router.get('/flowerlist', function(req, res) {
    res.sendFile(path.join(__dirname, '../app', 'flowerlist.html'));
});
router.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname, '../app', 'login.html'));
});

module.exports = router;
