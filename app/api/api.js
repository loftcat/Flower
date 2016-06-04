/**
 * Created by loftcat on 2015/11/18.
 */
var express = require('express');
var router = express.Router();
var path = require('path');

var FlowerDao = require('../js/models/flower');
var UserDao = require('../js/models/user')

/* GET home page. */
router.get('/test?type=:id', function(req, res) {
    console.log();
    res.sendFile(path.join(__dirname, '../', 'index.html'));
//    res.send(id);
});

router.get('/flowerlist/type=:type/:index/:count', function(req, res) {
    var flowerDao = new FlowerDao();
    console.log(req.params);
    flowerDao.findByPage(req.params.type,req.params.index,req.params.count,function (err, docs) {
        res.json(docs);
    })
});


router.get('/searchlist/name=:name/:index/:count', function(req, res) {
    var flowerDao = new FlowerDao();
    flowerDao.findByNameWithPage(req.params.name,req.params.index,req.params.count,function (err, docs) {
        res.json(docs);
    })
});


router.get('/searchlist/name=:name', function(req, res) {
    var flowerDao = new FlowerDao();
    flowerDao.findByName(req.params.name,function (err, docs) {
        res.json(docs);
    })
});
router.get('/searchlist/count/name=:name', function(req, res) {
    var flowerDao = new FlowerDao();
    flowerDao.countByName(req.params.name,function (err, count) {
        res.json(count);
    })
});

router.get('/flowerlist/count/type=:type', function(req, res) {
    var flowerDao = new FlowerDao();
    flowerDao.count(req.params.type,function (err, count) {
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

router.get('/login/name=:name/:password', function (req, res) {
    var userDao = new UserDao();
    userDao.findone(req.params.name, function (err, doc) {
        res.json(doc);
    })
});
router.get('/register/name=:name/:password', function (req, res) {
    var userDao = new UserDao();
    var user = {name: req.params.name, password: req.params.password};
    userDao.add(user, function (err) {
        res.json(err);
    })
});

module.exports = router;
