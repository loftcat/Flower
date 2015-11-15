var express = require('express');
var router = express.Router();
var path = require('path');
var FlowerDao = require('../app/scripts/models/flower');

/* GET home page. */
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../app', 'index.html'));
});
router.get('/flowerlist', function(req, res) {
    res.sendFile(path.join(__dirname, '../app', 'flowerlist.html'));
});
router.get('/api/flowerlist', function(req, res) {
    var flowerDao = new FlowerDao();
    flowerDao.findAll(function (err, docs) {
        res.json(docs);
    })
});
module.exports = router;
