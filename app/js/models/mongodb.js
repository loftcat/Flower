/**
 * Created by hebin on 2015/7/29.
 */
var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:28017');
var db = mongoose.connect('mongodb://114.55.29.207/flowerworld');
exports.mongoose = mongoose;
exports.db = db;





