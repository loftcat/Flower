/**
 * Created by loftcat on 2015/11/18.
 */
var express = require('express');
var router = express.Router();
var path = require('path');

var FlowerDao = require('../js/models/flower');

/* GET home page. */
router.get('/test?type=:id', function(req, res) {
    console.log();
    res.sendFile(path.join(__dirname, '../', 'index.html'));
//    res.send(id);
});

router.get('/flowerlist/type=:id/:index/:count', function(req, res) {
    var flowerDao = new FlowerDao();
    console.log(req.params);
    flowerDao.findByPage(req.params.id,req.params.index,req.params.count,function (err, docs) {
        res.json(docs);
    })
});

router.get('/flowerlist/count/type=:type', function(req, res) {
    var flowerDao = new FlowerDao();
    flowerDao.count(req.params.type,function (err, count) {
        console.log(count);
        res.json(count);
    })
});
router.get('/flowerdetail/id=:id', function(req, res) {
    var flowerDao = new FlowerDao();
    flowerDao.findone(req.params.id,function (err, count) {
        console.log(count);
        res.json(count);
    })
});
router.get('/flowerdetail/name=:name', function(req, res) {
    var flowerDao = new FlowerDao();
    flowerDao.findoneByName(req.params.name,function (err, doc) {
        if(err){
            res.json(err);
        }else{
            res.json(doc);

        }
    })
});

module.exports = router;
