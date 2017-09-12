var mongodb = require('mongodb');
var MongoClient=mongodb.MongoClient;
var url = "mongodb://localhost:27017/products";

MongoClient.connect(url,function(err,db){
	if(err){
 console.log(err);
	}
	else
	{
console.log("mongodb is connect madhavi test"+ url);

var collection=db.collection('apple');
 var doc1={name:'red apple',color:'red'};
var doc2={name:'red apple',color:'red'};
collection.insert([doc1,doc2],function(err,res){
	if(err){
console.log(err);
	}
	else
	{
console.log("db doc is inserted ", res.insertcount);
	}
db.close();
})

// db.close();
	}

});