import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        if(mongoose.connection.readyState === 0){
            await mongoose.connect(process.env.DATABASE_URL as string)
        }
    } catch(error){
        console.log(error)
    }
}