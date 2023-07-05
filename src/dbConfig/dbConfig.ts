import mongoose from 'mongoose';

export const connect=async()=>{
    try {
     await mongoose.connect(process.env.MONGO_URL!)
      const connection=mongoose.connection;
      
      connection.on('connected',()=>{
        console.log("MONGO DB connected successfully");
      })

      connection.on('error',(err)=>{
        console.log("mongodb connection error"+err);
        process.exit();
      })
    } catch (error) {
      console.log("something went wrong!");
      console.log(error);  
    }
}