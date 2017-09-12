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
collection.update({'name':'red apple'},{$set:{'color':'blue'}},function(err,result)
{
	if(err)
	{
console.log(err);
	}
	else
	{
		console.log("succueful update");

	}
	db.close();
});

}
});