/**
 * Created by hebin on 2015/7/29.
 */
var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;
var userSchema = new Schema({
    name: String,
    password: String
});

mongodb.mongoose.model("user", userSchema);
var User = mongodb.mongoose.model("user");
var UserDao = function () {
    this.findone = function (name, callback) {
        User.findOne({name: name}, function (err, doc) {
            if (callback) {
                callback(err, doc);
            }
        });
    };
    this.add = function (user, callback) {
        User.update({name: user.name}, {$set: user}, {upsert: true}, function (err) {
            if (callback) {
                callback(err);
            }
        });
    };

}

module.exports = UserDao;