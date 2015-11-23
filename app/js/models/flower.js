/**
 * Created by hebin on 2015/7/29.
 */
var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;
var flowerSchema = new Schema({
    basic_info:{
        ch_name : {
            title:String,
            value:String
        },
        en_name : {
            title:String,
            value:String
        },
        scientific_name : {
            title:String,
            value:String
        },
        nick_name: {
            title:String,
            value:String
        },
        regnumvegetabile: {
            title:String,
            value:String
        },
        subkingdom: {
            title:String,
            value:String
        },
        divisio: {
            title:String,
            value:String
        },
        subdivisio: {
            title:String,
            value:String
        },
        classis: {
            title:String,
            value:String
        },
        subclassis: {
            title:String,
            value:String
        },
        ordo: {
            title:String,
            value:String
        },
        subordo: {
            title:String,
            value:String
        },
        familia : {
            title:String,
            value:String
        },
        subfamilia : {
            title:String,
            value:String
        },
        tribus: {
            title:String,
            value:String
        },
        subtribus: {
            title:String,
            value:String
        },
        genus: {
            title:String,
            value:String
        },
        subgenus: {
            title:String,
            value:String
        },
        sectio: {
            title:String,
            value:String
        },
        subsectio: {
            title:String,
            value:String
        },
        series: {
            title:String,
            value:String
        },
        subseries: {
            title:String,
            value:String
        },
        species: {
            title:String,
            value:String
        },
        subspecies: {
            title:String,
            value:String
        },
        varietas: {
            title:String,
            value:String
        },
        forma: {
            title:String,
            value:String
        },
        area: {
            title:String,
            value:String
        },
        enviroment: {
            title:String,
            value:String
        },
        ecological_habit: {
            title:String,
            value:String
        },
        life_form: {
            title:String,
            value:String
        },
        illumination: {
            title:String,
            value:String
        },
        moisture: {
            title:String,
            value:String
        },
        temperature: {
            title:String,
            value:String
        },
        soil: {
            title:String,
            value:String
        },
        altitude: {
            title:String,
            value:String
        },
        florescence: {
            title:String,
            value:String
        },
        medicinal_value: {
            title:String,
            value:String
        },
        industrial: {
            title:String,
            value:String
        },
        special_purpose: {
            title:String,
            value:String
        },
        toxicity: {
            title:String,
            value:String
        },
        symbolic_significance: {
            title:String,
            value:String
        },
        origin: {
            title:String,
            value:String
        },
        binomial_nomenclature: {
            title:String,
            value:String
        },
        who_founed: {
            title:String,
            value:String
        }
    },
    name:String,
    desc : String,
    type : String,
    head_from:String
});

mongodb.mongoose.model("flower", flowerSchema);
var Flower = mongodb.mongoose.model("flower");
var count=0;
var FlowerDao = function () {
    this.add = function(flower,callback) {
        count++;
        var index= count;
        Flower.update({name:flower.name},{$set : flower},{upsert:true},function(err,data){
            if(callback){
                callback(err,index);
            }
        });
    };

    this.delete = function(id, callback) {
        Flower.remove({_id:id},function(err,docs){
            if(callback){
                callback(err,docs);
            }
        });
    };

    this.find = function(name, callback) {
        Flower.find({name:name},function(err,docs) {
            if(callback){
                callback(err,docs);
            }
        });
    };
    this.findAll = function(callback) {
        Flower.find(function(err,docs) {
            console.log(docs);
            if(callback){
                callback(err,docs);
            }
        });
    };
    this.deleteAll = function(callback) {
        Flower.remove(function(err,docs){
            if(callback){
                callback(err,docs);
            }
        });
    };
    this.count = function(callback) {
        Flower.count(function(err,count){
            if(callback){
                callback(count);
            }
        });
    };
}

module.exports= FlowerDao;