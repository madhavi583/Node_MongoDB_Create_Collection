var mongodb = require('mongodb');
var MongoClient=mongodb.MongoClient;
var url = "mongodb://localhost:27017/products";

MongoClient.connect(url,function(err,db){
	if(err){
 console.log(err);
	}
	else
	{
console.log("mongodb is connect"+ url);
var collection=db.collection('apple');
 var doc1={name:'red apple',color:'red'};
var doc2={name:'green apple',color:'green'};
collection.insert([doc1,doc2],function(err,res){
	if(err){
console.log(err);
	}
	else
	{
console.log("db doc is inserted ", res.insertedCount);
	}
db.close();
})

// db.close();
	}

});