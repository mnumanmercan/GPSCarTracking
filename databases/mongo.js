const mongo = require('mongodb');

const mongoClient = mongo.MongoClient;
const url = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'

mongoClient.connect(url,(err,client)=>{
  if(err) throw err;
  
  const mydb = client.db('Cars');
  console.log('MongoDB baglantisi basariyla gerceklestirildi...');
  var mySort = {Car_ID:-1};
  mydb.collection("MNM'sCar").find({}).sort(mySort).toArray((err,result)=>{
      if(err)throw err;

      console.log(result);
      client.close();
  })
})

module.exports = mongoClient;