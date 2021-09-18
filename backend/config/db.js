require("dotenv").config();
const mongoose = require("mongoose");

const db= "mongodb+srv://durgesh:durgeshmuley@cluster0.wrxji.mongodb.net/farmstack?retryWrites=true&w=majority"

mongoose.connect(db,
  {useNewUrlparser:true,
  useCreateIndex:true,
  useUnifiedTopology:true,
  useFindAndModify:false
  }).then(()=>{
  console.log("connection successful");
}).catch(()=>console.log("connection failed"));
// const connectDB = async () => {
//   try {
//     await mongoose.connect(URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     console.log("MongoDB connection SUCCESS");
//   } catch (error) {
//     console.error("MongoDB connection FAIL");
//     // process.exit(1);
//   }
// };


// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://durgesh:durgeshmuley@cluster0.wrxji.mongodb.net/farmstack?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


const connectDB = async () => {
  try {
    client.connect(err => {
      const collection = client.db("test").collection("devices");
      // perform actions on the collection object
      // client.close();
      console.log("MongoDB connection SUCCESS");
    });

  } catch (error) {
    console.error("MongoDB connection FAIL");
    // process.exit(1);
  }
};

module.exports = connectDB;
