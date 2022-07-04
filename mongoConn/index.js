// const mongoose = require("mongoose")
// mongoose.connect("mongodb://localhost:27017/nec").then(()=>console.log("Connected Succesfully")).catch((err)=>console.log(err))
// console.log("working")
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


// insert new data in collection
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("nec");
//     let myobj = { name: "Company Inc", address: "Highway 37" };
//     dbo.collection("content").insertOne(myobj, function(err, res) {
//       if (err) throw err;
//       console.log("1 document inserted");
//       db.close();
//     });
//   });

//  find the element in collection
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("nec");
//   dbo.collection("content").findOne({}, function(err, result) {
//     if (err) throw err;
//     console.log(result.content);
//     db.close();
//   });
// });

// findall
//  find the element in collection/
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("nec");
//   dbo.collection("content").find({}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("nec");
  var query = { name: "Company Inc" };
  dbo.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});