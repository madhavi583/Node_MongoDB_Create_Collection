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
collection.find().toArray(function(err,result){
	if(err)
	{
console.log(err);
	}
	else if(result.length)
	{
		console.log(result);

	}
	else{
		console.log("no match fund");
	}
	db.close();
});

}
});