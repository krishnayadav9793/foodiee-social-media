import mongoose from "mongoose";

export async function connect() {
    try{
       await mongoose.connect(process.env.MONGO_URI)
       const connection =mongoose.connection;
       connection.on('connected',()=>{
        console.log("Mongo DB connected");
       })
       connection.on('error',(err)=>{
        console.log("Mongodb connection error ,please make sure db is up " + err)
        process.exit()
       })
    }catch(err){
        console.log("something went wrong in mongo dp connection....");

    }
}