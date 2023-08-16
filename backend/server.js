var express = require("express");
var server = express();

var routes= require('./routes/routes')
const mongoose = require('mongoose');
const cors = require('cors')


// var mongoose = require('mongoose');



// mongoose.connect("mongodb://localhost:27017/est",{useNewUrlParser: true, useUnifiedTopology: true },function checkDB(error)
// {
    //     if(error)
    //     {
//         console.log("errorr")
//     }
//     else
//     {
    //         console.log("DB Connectedd")
    //     }
    // });
    
    
mongoose.set('strictQuery',true)

const uri="mongodb+srv://harshrajput:CXLLn1PHsaYdxp0L@harshapi.1onaebs.mongodb.net/?retryWrites=true&w=majority"



mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });






  server.use(cors())

  server.use(express.json());
  
  server.use(routes)
  



server.listen(8000,function check(error)

{
    if(error){
        console.log("error encountered")
    }
    else{
        console.log("started successfully")
    }
})


