var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/sendData', function(req, res, next) {
 console.log( req.body.latitude);





 var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://chenbaruch:mK6BZBGD6FmeYWeT@cluster0.vhjmf.mongodb.net/<dbname>?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("forms");
  var myobj = { latitude: req.body.latitude, longitude:  req.body.longitude, text: req.body.textA  };
  dbo.collection("form").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});



});


module.exports = router;
