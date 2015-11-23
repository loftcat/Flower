/**
 * Created by loftcat on 2015/11/18.
 */
var express = require('express');
var router = express.Router();
var path = require('path');

var FlowerDao = require('../js/models/flower');

/* GET home page. */
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../app', 'index.html'));
});

router.get('/api/flowerlist', function(req, res) {
    var flowerDao = new FlowerDao();
    flowerDao.findAll(function (err, docs) {
        res.json(docs);
    })
});

module.exports = router;
