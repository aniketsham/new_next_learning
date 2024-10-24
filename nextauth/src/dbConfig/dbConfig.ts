import mongoose from "mongoose";

export async function connectDB(){
    try {
        mongoose.connect(process.env.MONGO_URL!)
        const connection=mongoose.connection

        connection.on('connected',()=>{
            console.log("Mongo DB Connected")
        })

        connection.on('error',(err)=>{
            console.log("MongoDb Connection Error"+err)
            process.exit()
        })
    } catch (error) {
        console.log(error)
    }
}