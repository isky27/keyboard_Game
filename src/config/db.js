const mongoose  = require("mongoose");

require("dotenv").config();

const connection = async()=>{
    mongoose.set('strictQuery', true);

    mongoose.connect(process.env.MONGO_URL)
    .then(()=> console.log("MongoDb Connected"))
    .catch((e)=>console.log(e))
}

module.exports= connection;