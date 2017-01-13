var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

var url = 'mongodb://localhost:27017/coursera';

MongoClient.connect(url, function (err, db) {
    assert.equal(err, null);
    console.log("Connected to database coursera");

    var collection = db.collection('coursera');
    collection.insertOne({
        name: "Thiago",
        description: "test"
    },
    function(err, result){
        assert.equal(err,null);
        console.log("After insert");
        console.log(result.ops)
    })
})